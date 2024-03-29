/*
 * JS for About_Us generated by Appery.io
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

function About_Us_js() {
    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'lblZUHelpApp': 'About_Us_lblZUHelpApp',
        'lblDescription': 'About_Us_lblDescription',
        'sltTranslateAboutUs': 'About_Us_sltTranslateAboutUs',
        'sltTranslateAboutUs-0': 'About_Us_sltTranslateAboutUs-0',
        'lblDevelopers': 'About_Us_lblDevelopers',
        'Si': 'About_Us_Si',
        'mobilegridcell_5': 'About_Us_mobilegridcell_5',
        'lblSizer': 'About_Us_lblSizer',
        'mobilegridcell_6': 'About_Us_mobilegridcell_6',
        'lblNati': 'About_Us_lblNati',
        'lblContactUS': 'About_Us_lblContactUS',
        'mobilegrid_11': 'About_Us_mobilegrid_11',
        'mobilegridcell_12': 'About_Us_mobilegridcell_12',
        'lblSimonEmail': 'About_Us_lblSimonEmail',
        'mobilegridcell_13': 'About_Us_mobilegridcell_13',
        'lblNatnaelEmail': 'About_Us_lblNatnaelEmail'
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
    Apperyio.mappings["About_Us_listAboutUs_onsuccess_mapping_0"] = {
        "homeScreen": "About_Us",
        "directions": [
            {
                "from_name": "listAboutUs",
                "from_type": "SERVICE_RESPONSE",
                "to_name": "Translation_About_Us",
                "to_type": "LOCAL_STORAGE",
                "mappings": [
                    {
                        "source": "$['body'][0]['AboutUsDescription']",
                        "target": "$"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["About_Us_listAboutUs_onbeforesend_mapping_0"] = {
        "homeScreen": "About_Us",
        "directions": [
            {
                "to_name": "listAboutUs",
                "to_type": "SERVICE_REQUEST",
                "to_default": {
                    "headers": {
                        "X-Appery-Database-Id": "{database_id}"
                    },
                    "parameters": {},
                    "body": null
                },
                "mappings": []
            }
        ]
    };
    Apperyio.mappings["About_Us_TranslateAboutUs_onsuccess_mapping_0"] = {
        "homeScreen": "About_Us",
        "directions": [
            {
                "from_name": "TranslateAboutUs",
                "from_type": "SERVICE_RESPONSE",
                "to_name": "About_Us",
                "to_type": "UI",
                "mappings": [
                    {
                        "source": "$['body']['responseData']['translatedText']",
                        "target": "$['lblDescription:text']"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["About_Us_TranslateAboutUs_onbeforesend_mapping_0"] = {
        "homeScreen": "About_Us",
        "directions": [
            {
                "from_name": "Translation_About_Us",
                "from_type": "LOCAL_STORAGE",
                "to_name": "TranslateAboutUs",
                "to_type": "SERVICE_REQUEST",
                "to_default": {
                    "headers": {},
                    "parameters": {},
                    "body": null
                },
                "mappings": [
                    {
                        "source": "$",
                        "target": "$['parameters']['word']"
                    }
                ]
            },
            {
                "from_name": "About_Us",
                "from_type": "UI",
                "to_name": "TranslateAboutUs",
                "to_type": "SERVICE_REQUEST",
                "to_default": {
                    "headers": {},
                    "parameters": {},
                    "body": null
                },
                "mappings": [
                    {
                        "source": "$['sltTranslateAboutUs:selectedMenuItem']",
                        "target": "$['parameters']['translation']"
                    }
                ]
            }
        ]
    };
    Apperyio.datasources = Apperyio.datasources || {};
    window.listAboutUs = Apperyio.datasources.listAboutUs = new Apperyio.DataSource(About_Us_database_About_Us_list_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["About_Us_listAboutUs_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["About_Us_listAboutUs_onsuccess_mapping_0"]);
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    window.TranslateAboutUs = Apperyio.datasources.TranslateAboutUs = new Apperyio.DataSource(Translate_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["About_Us_TranslateAboutUs_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["About_Us_TranslateAboutUs_onsuccess_mapping_0"]);
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    Apperyio.CurrentScreen = 'About_Us';
    _.chain(Apperyio.mappings)
        .filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        })
        .each(Apperyio.UIHandler.hideTemplateComponents);
    /*
     * Events and handlers
     */
    // On Load
    var About_Us_onLoad = function() {
        About_Us_elementsExtraJS();
        About_Us_deviceEvents();
        About_Us_windowEvents();
        About_Us_elementsEvents();
    };
    // screen window events
    function About_Us_windowEvents() {
        $('#About_Us').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
    };
    // device events
    function About_Us_deviceEvents() {
        document.addEventListener("deviceready", function() {
        });
    };
    // screen elements extra js
    function About_Us_elementsExtraJS() {
        // screen (About_Us) extra code
        /* sltTranslateAboutUs */
        $("#About_Us_sltTranslateAboutUs").parent().find("a.ui-btn").attr("tabindex", "1");
    };
    // screen elements handler
    function About_Us_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });
        $(document).off("change", '#About_Us_mobilecontainer [name="sltTranslateAboutUs"]').on({
            change: function(event) {
                try {
                    listAboutUs.execute({});
                } catch (e) {
                    console.error(e);
                    hideSpinner();
                };
                try {
                    TranslateAboutUs.execute({});
                } catch (e) {
                    console.error(e);
                    hideSpinner();
                };
            },
        }, '#About_Us_mobilecontainer [name="sltTranslateAboutUs"]');
    };
    $(document).off("pagebeforeshow", "#About_Us").on("pagebeforeshow", "#About_Us", function(event, ui) {
        Apperyio.CurrentScreen = "About_Us";
        _.chain(Apperyio.mappings)
            .filter(function(m) {
                return m.homeScreen === Apperyio.CurrentScreen;
            })
            .each(Apperyio.UIHandler.hideTemplateComponents);
    });
    About_Us_onLoad();
};
$(document).off("pagecreate", "#About_Us").on("pagecreate", "#About_Us", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    About_Us_js();
});