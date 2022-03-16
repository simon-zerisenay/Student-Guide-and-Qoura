/*
 * JS for Choose generated by Appery.io
 */
Apperyio.getProjectGUID = function() {
    return '97c28bfd-366a-4acc-9168-d1f20dc6a133';
};

function navigateTo(outcome, useAjax) {
    Apperyio.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Apperyio.adjustContentHeightWithPadding();
}

function adjustContentHeightWithPadding(_page) {
    Apperyio.adjustContentHeightWithPadding(_page);
}

function setDetailContent(pageUrl) {
    Apperyio.setDetailContent(pageUrl);
}
Apperyio.AppPages = [{
    "name": "ReportPage",
    "location": "ReportPage.html"
}, {
    "name": "StudentGuide",
    "location": "StudentGuide.html"
}, {
    "name": "Choose",
    "location": "Choose.html"
}, {
    "name": "Signup",
    "location": "Signup.html"
}, {
    "name": "Login",
    "location": "Login.html"
}, {
    "name": "Give_Answer",
    "location": "Give_Answer.html"
}, {
    "name": "View_Answer",
    "location": "View_Answer.html"
}, {
    "name": "Ask_a_Question",
    "location": "Ask_a_Question.html"
}, {
    "name": "About_Us",
    "location": "About_Us.html"
}, {
    "name": "QuestionandAnswer",
    "location": "QuestionandAnswer.html"
}];

function Choose_js() {
    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'spacer_12': 'Choose_spacer_12',
        'btnStudentGuide': 'Choose_btnStudentGuide',
        'spacer_16': 'Choose_spacer_16',
        'btnReport': 'Choose_btnReport',
        'spacer_17': 'Choose_spacer_17',
        'btnQuestionAnswer': 'Choose_btnQuestionAnswer',
        'spacer_19': 'Choose_spacer_19',
        'btnAboutUs': 'Choose_btnAboutUs'
    };
    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }
    /*
     * Nonvisual components
     */
    Apperyio.mappings = Apperyio.mappings || {};
    Apperyio.datasources = Apperyio.datasources || {};
    Apperyio.CurrentScreen = 'Choose';
    _.chain(Apperyio.mappings)
        .filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        })
        .each(Apperyio.UIHandler.hideTemplateComponents);
    /*
     * Events and handlers
     */
    // On Load
    var Choose_onLoad = function() {
        Choose_elementsExtraJS();
        Choose_deviceEvents();
        Choose_windowEvents();
        Choose_elementsEvents();
    };
    // screen window events
    function Choose_windowEvents() {
        $('#Choose').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
    };
    // device events
    function Choose_deviceEvents() {
        document.addEventListener("deviceready", function() {
        });
    };
    // screen elements extra js
    function Choose_elementsExtraJS() {
        // screen (Choose) extra code
    };
    // screen elements handler
    function Choose_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });
        $(document).off("click", '#Choose_mobilecontainer [name="btnStudentGuide"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('StudentGuide', {
                        reverse: false
                    });
                }
            },
        }, '#Choose_mobilecontainer [name="btnStudentGuide"]');
        $(document).off("click", '#Choose_mobilecontainer [name="btnReport"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('ReportPage', {
                        reverse: false
                    });
                }
            },
        }, '#Choose_mobilecontainer [name="btnReport"]');
        $(document).off("click", '#Choose_mobilecontainer [name="btnQuestionAnswer"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('QuestionandAnswer', {
                        reverse: false
                    });
                }
            },
        }, '#Choose_mobilecontainer [name="btnQuestionAnswer"]');
        $(document).off("click", '#Choose_mobilecontainer [name="btnAboutUs"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('About_Us', {
                        reverse: false
                    });
                }
            },
        }, '#Choose_mobilecontainer [name="btnAboutUs"]');
    };
    $(document).off("pagebeforeshow", "#Choose").on("pagebeforeshow", "#Choose", function(event, ui) {
        Apperyio.CurrentScreen = "Choose";
        _.chain(Apperyio.mappings)
            .filter(function(m) {
                return m.homeScreen === Apperyio.CurrentScreen;
            })
            .each(Apperyio.UIHandler.hideTemplateComponents);
    });
    Choose_onLoad();
};
$(document).off("pagecreate", "#Choose").on("pagecreate", "#Choose", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    Choose_js();
});