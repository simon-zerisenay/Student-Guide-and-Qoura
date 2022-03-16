var VimeoPlayer = (function(){
    function VimeoPlayer(iframe) {
        return new VimeoPlayer.fn.init(iframe);
    }

    var isReady = false,
        registeredIFrames = [];

    VimeoPlayer.fn = VimeoPlayer.prototype = {
        element: null,

        init: function(iframe) {
            this.$element = iframe;
            this.element = iframe[0];
            this.$element.data("vimeo-player-object", this); //Store Vimeo player object in iframe data.

            var url = iframe.attr('src').split('?')[0];
            if (url.substr(0, 2) === '//') {
                url = window.location.protocol + url;
            }
            this.url = url;

            registeredIFrames.push(this.element);

            if(iframe.data("vimeo-player-api-ready")) {
                this.onReady();
            }

            return this;
        },

        //Handle message sent from Vimeo iframe
        handleMessage: function(message, payload) {
            switch(message) {
                case 'ready':
                    this.onReady();
                    break;

                case 'loadProgress':
                    this.onLoadProgress(payload);
                    break;

                case 'playProgress':
                    this.onPlayProgress(payload);
                    break;

                case 'play':
                    this.onPlay();
                    break;

                case 'pause':
                    this.onPause();
                    break;

                case 'finish':
                    this.onFinish();
                    break;

                case 'seek':
                    this.onSeek(payload);
                    break;
            }
        },

        //Function for sending a message to the player
        post: function(action, value) {
            var data = { method: action };
            if (value) {
                data.value = value;
            }

            this.element.contentWindow.postMessage(JSON.stringify(data), this.url);
        },

        onReady: function () {
            this.$element.trigger("vimeoready");

            this.post('addEventListener', 'loadProgress');
            this.post('addEventListener', 'playProgress');
            this.post('addEventListener', 'play');
            this.post('addEventListener', 'pause');
            this.post('addEventListener', 'finish');
            this.post('addEventListener', 'seek');
        },

        onLoadProgress: function(payload) {
            this.$element.trigger("vimeoloadProgress", [payload]);
        },
        onPlayProgress: function(payload) {
            this.$element.trigger("vimeoplayProgress", [payload]);
        },
        onPlay: function() {
            this.$element.trigger("vimeoplay");
        },
        onPause: function() {
            this.$element.trigger("vimeopause");
        },
        onFinish: function() {
            this.$element.trigger("vimeofinish");
        },
        onSeek: function(payload) {
            this.$element.trigger("vimeoseek", [payload]);
        }
    };

    function findIframeByWindow(windowObject) {
        var i;
        for(i=0; i<registeredIFrames.length; i++) {
            if(registeredIFrames[i].contentWindow == windowObject) {
                return registeredIFrames[i];
            }
        }
        return null;
    }

    // Listen for messages from the player
    if (window.addEventListener){
        window.addEventListener('message', onMessageReceived, false);
    }
    else {
        window.attachEvent('onmessage', onMessageReceived);
    }

    // Handle messages received from the player
    function onMessageReceived(e) {
        var data = JSON.parse(e.data);
        var iframe = findIframeByWindow(e.source);
        if(iframe === undefined || iframe === null) {
            //Vimeo player object is not created for this iframe
            if(data.event == "ready") {
                //Put flag to indicate that API is ready for this player
                $(iframe).data("vimeo-player-api-ready", true);
            }
        }
        var vimeoPlayerObj = $(iframe).data("vimeo-player-object");

        if(vimeoPlayerObj) {
            vimeoPlayerObj.handleMessage(data.event, data.data);
        }
    }

    VimeoPlayer.fn.init.prototype = VimeoPlayer.fn;

    return window.VimeoPlayer = VimeoPlayer;
})();
