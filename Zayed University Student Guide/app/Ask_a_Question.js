/*
 * JS for Ask_a_Question generated by Appery.io
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

function Ask_a_Question_js() {
    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'txtQuestion': 'Ask_a_Question_txtQuestion',
        'btnSubmitQuestion': 'Ask_a_Question_btnSubmitQuestion'
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
    Apperyio.mappings["Ask_a_Question_createUploadQuestion_onsuccess_mapping_0"] = {
        "homeScreen": "Ask_a_Question",
        "directions": []
    };
    Apperyio.mappings["Ask_a_Question_createUploadQuestion_onbeforesend_mapping_0"] = {
        "homeScreen": "Ask_a_Question",
        "directions": [
            {
                "from_name": "Ask_a_Question",
                "from_type": "UI",
                "to_name": "createUploadQuestion",
                "to_type": "SERVICE_REQUEST",
                "to_default": {
                    "headers": {
                        "X-Appery-Database-Id": "{database_id}",
                        "Content-Type": "application/json"
                    },
                    "parameters": {},
                    "body": {
                        "acl": {
                            "*": {
                                "write": true,
                                "read": true
                            }
                        }
                    }
                },
                "mappings": [
                    {
                        "source": "$['txtQuestion:text']",
                        "target": "$['body']['Question']"
                    }
                ]
            }
        ]
    };
    Apperyio.datasources = Apperyio.datasources || {};
    window.createUploadQuestion = Apperyio.datasources.createUploadQuestion = new Apperyio.DataSource(Question_and_Answer_Question_create_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["Ask_a_Question_createUploadQuestion_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["Ask_a_Question_createUploadQuestion_onsuccess_mapping_0"]);
            alert("Question uploaded Successfully");
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    Apperyio.CurrentScreen = 'Ask_a_Question';
    _.chain(Apperyio.mappings)
        .filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        })
        .each(Apperyio.UIHandler.hideTemplateComponents);
    /*
     * Events and handlers
     */
    // On Load
    var Ask_a_Question_onLoad = function() {
        Ask_a_Question_elementsExtraJS();
        Ask_a_Question_deviceEvents();
        Ask_a_Question_windowEvents();
        Ask_a_Question_elementsEvents();
    };
    // screen window events
    function Ask_a_Question_windowEvents() {
        $('#Ask_a_Question').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
    };
    // device events
    function Ask_a_Question_deviceEvents() {
        document.addEventListener("deviceready", function() {
        });
    };
    // screen elements extra js
    function Ask_a_Question_elementsExtraJS() {
        // screen (Ask_a_Question) extra code
    };
    // screen elements handler
    function Ask_a_Question_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });
        $(document).off("click", '#Ask_a_Question_mobilecontainer [name="btnSubmitQuestion"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    try {
                        createUploadQuestion.execute({});
                    } catch (e) {
                        console.error(e);
                        hideSpinner();
                    };
                    try {
                        $a.c15r("txtQuestion", "set", "text", ' ')
                    } catch (e) {
                        console.error(e)
                    };
                }
            },
        }, '#Ask_a_Question_mobilecontainer [name="btnSubmitQuestion"]');
    };
    $(document).off("pagebeforeshow", "#Ask_a_Question").on("pagebeforeshow", "#Ask_a_Question", function(event, ui) {
        Apperyio.CurrentScreen = "Ask_a_Question";
        _.chain(Apperyio.mappings)
            .filter(function(m) {
                return m.homeScreen === Apperyio.CurrentScreen;
            })
            .each(Apperyio.UIHandler.hideTemplateComponents);
    });
    Ask_a_Question_onLoad();
};
$(document).off("pagecreate", "#Ask_a_Question").on("pagecreate", "#Ask_a_Question", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    Ask_a_Question_js();
});
