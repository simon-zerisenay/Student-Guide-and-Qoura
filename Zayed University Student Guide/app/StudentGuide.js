/*
 * JS for StudentGuide generated by Appery.io
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

function StudentGuide_js() {
    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'lblGuide': 'StudentGuide_lblGuide',
        'sltSelectPlace': 'StudentGuide_sltSelectPlace',
        'sltSelectPlace-0': 'StudentGuide_sltSelectPlace-0',
        'lblDescription': 'StudentGuide_lblDescription',
        'spacer_11': 'StudentGuide_spacer_11',
        'sltChangeLanguage': 'StudentGuide_sltChangeLanguage',
        'sltChangeLanguage-0': 'StudentGuide_sltChangeLanguage-0',
        'lbltranslated': 'StudentGuide_lbltranslated'
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
    Apperyio.mappings["StudentGuide_listSelectService_onsuccess_mapping_0"] = {
        "homeScreen": "StudentGuide",
        "directions": [
            {
                "from_name": "listSelectService",
                "from_type": "SERVICE_RESPONSE",
                "to_name": "StudentGuide",
                "to_type": "UI",
                "mappings": [
                    {
                        "source": "$['body'][i]['Place']",
                        "target": "$['sltSelectPlace-0:label']"
                    },
                    {
                        "source": "$['body'][i]",
                        "target": "$['sltSelectPlace-0']"
                    },
                    {
                        "source": "$['body'][i]['Place']",
                        "target": "$['sltSelectPlace-0:value']"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["StudentGuide_listSelectService_onbeforesend_mapping_0"] = {
        "homeScreen": "StudentGuide",
        "directions": [
            {
                "to_name": "listSelectService",
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
    Apperyio.mappings["StudentGuide_searchSelectedService_onsuccess_mapping_0"] = {
        "homeScreen": "StudentGuide",
        "directions": [
            {
                "from_name": "searchSelectedService",
                "from_type": "SERVICE_RESPONSE",
                "to_name": "Description",
                "to_type": "LOCAL_STORAGE",
                "mappings": [
                    {
                        "source": "$['body'][0]['Description']",
                        "target": "$"
                    }
                ]
            },
            {
                "from_name": "searchSelectedService",
                "from_type": "SERVICE_RESPONSE",
                "to_name": "StudentGuide",
                "to_type": "UI",
                "mappings": [
                    {
                        "source": "$['body'][0]['Description']",
                        "target": "$['lblDescription:text']"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["StudentGuide_searchSelectedService_onbeforesend_mapping_0"] = {
        "homeScreen": "StudentGuide",
        "directions": [
            {
                "from_name": "StudentGuide",
                "from_type": "UI",
                "to_name": "searchSelectedService",
                "to_type": "SERVICE_REQUEST",
                "to_default": {
                    "headers": {
                        "X-Appery-Database-Id": "{database_id}"
                    },
                    "parameters": {},
                    "body": null
                },
                "mappings": [
                    {
                        "source": "$['sltSelectPlace:selectedMenuItem']",
                        "target_transformation": function(value) {
                            return '{"Place":"' + value + '"}';
                        },
                        "target": "$['parameters']['where']"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["StudentGuide_listSelectTranslation_onsuccess_mapping_0"] = {
        "homeScreen": "StudentGuide",
        "directions": [
            {
                "from_name": "listSelectTranslation",
                "from_type": "SERVICE_RESPONSE",
                "to_name": "StudentGuide",
                "to_type": "UI",
                "mappings": [
                    {
                        "source": "$['body'][i]['Language_Type']",
                        "target": "$['sltChangeLanguage-0:label']"
                    },
                    {
                        "source": "$['body'][i]",
                        "target": "$['sltChangeLanguage-0']"
                    },
                    {
                        "source": "$['body'][i]['Language_Type']",
                        "target": "$['sltChangeLanguage-0:value']"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["StudentGuide_listSelectTranslation_onbeforesend_mapping_0"] = {
        "homeScreen": "StudentGuide",
        "directions": [
            {
                "to_name": "listSelectTranslation",
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
    Apperyio.mappings["StudentGuide_searchSelectedTranslation_onsuccess_mapping_0"] = {
        "homeScreen": "StudentGuide",
        "directions": [
            {
                "from_name": "searchSelectedTranslation",
                "from_type": "SERVICE_RESPONSE",
                "to_name": "Translation_key",
                "to_type": "LOCAL_STORAGE",
                "mappings": [
                    {
                        "source": "$['body'][0]['From_to_To']",
                        "target": "$"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["StudentGuide_searchSelectedTranslation_onbeforesend_mapping_0"] = {
        "homeScreen": "StudentGuide",
        "directions": [
            {
                "from_name": "StudentGuide",
                "from_type": "UI",
                "to_name": "searchSelectedTranslation",
                "to_type": "SERVICE_REQUEST",
                "to_default": {
                    "headers": {
                        "X-Appery-Database-Id": "{database_id}"
                    },
                    "parameters": {},
                    "body": null
                },
                "mappings": [
                    {
                        "source": "$['sltChangeLanguage:selectedMenuItem']",
                        "target_transformation": function(value) {
                            return '{"Language_Type":"' + value + '"}';
                        },
                        "target": "$['parameters']['where']"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["StudentGuide_translateService_onsuccess_mapping_0"] = {
        "homeScreen": "StudentGuide",
        "directions": [
            {
                "from_name": "translateService",
                "from_type": "SERVICE_RESPONSE",
                "to_name": "StudentGuide",
                "to_type": "UI",
                "mappings": [
                    {
                        "source": "$['body']['responseData']['translatedText']",
                        "target": "$['lbltranslated:text']"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["StudentGuide_translateService_onbeforesend_mapping_0"] = {
        "homeScreen": "StudentGuide",
        "directions": [
            {
                "from_name": "Description",
                "from_type": "LOCAL_STORAGE",
                "to_name": "translateService",
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
                "from_name": "StudentGuide",
                "from_type": "UI",
                "to_name": "translateService",
                "to_type": "SERVICE_REQUEST",
                "to_default": {
                    "headers": {},
                    "parameters": {},
                    "body": null
                },
                "mappings": [
                    {
                        "source": "$['sltChangeLanguage:selectedMenuItem']",
                        "target": "$['parameters']['translation']"
                    }
                ]
            }
        ]
    };
    Apperyio.datasources = Apperyio.datasources || {};
    window.listSelectService = Apperyio.datasources.listSelectService = new Apperyio.DataSource(StudentGuideDatabase_StudentGuideCollection_list_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["StudentGuide_listSelectService_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["StudentGuide_listSelectService_onsuccess_mapping_0"]);
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    window.searchSelectedService = Apperyio.datasources.searchSelectedService = new Apperyio.DataSource(StudentGuideDatabase_StudentGuideCollection_query_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["StudentGuide_searchSelectedService_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["StudentGuide_searchSelectedService_onsuccess_mapping_0"]);
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    window.listSelectTranslation = Apperyio.datasources.listSelectTranslation = new Apperyio.DataSource(StudentGuideDatabase_TranslationCollection_list_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["StudentGuide_listSelectTranslation_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["StudentGuide_listSelectTranslation_onsuccess_mapping_0"]);
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    window.searchSelectedTranslation = Apperyio.datasources.searchSelectedTranslation = new Apperyio.DataSource(StudentGuideDatabase_TranslationCollection_query_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["StudentGuide_searchSelectedTranslation_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["StudentGuide_searchSelectedTranslation_onsuccess_mapping_0"]);
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    window.translateService = Apperyio.datasources.translateService = new Apperyio.DataSource(Translate_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["StudentGuide_translateService_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["StudentGuide_translateService_onsuccess_mapping_0"]);
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    Apperyio.CurrentScreen = 'StudentGuide';
    _.chain(Apperyio.mappings)
        .filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        })
        .each(Apperyio.UIHandler.hideTemplateComponents);
    /*
     * Events and handlers
     */
    // On Load
    var StudentGuide_onLoad = function() {
        StudentGuide_elementsExtraJS();
        try {
            listSelectService.execute({});
        } catch (e) {
            console.error(e);
            hideSpinner();
        };
        StudentGuide_deviceEvents();
        StudentGuide_windowEvents();
        StudentGuide_elementsEvents();
    };
    // screen window events
    function StudentGuide_windowEvents() {
        $('#StudentGuide').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
    };
    // device events
    function StudentGuide_deviceEvents() {
        document.addEventListener("deviceready", function() {
        });
    };
    // screen elements extra js
    function StudentGuide_elementsExtraJS() {
        // screen (StudentGuide) extra code
        /* sltSelectPlace */
        $("#StudentGuide_sltSelectPlace").parent().find("a.ui-btn").attr("tabindex", "1");
        /* sltChangeLanguage */
        $("#StudentGuide_sltChangeLanguage").parent().find("a.ui-btn").attr("tabindex", "3");
    };
    // screen elements handler
    function StudentGuide_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });
        $(document).off("change", '#StudentGuide_mobilecontainer [name="sltSelectPlace"]').on({
            change: function(event) {
                try {
                    searchSelectedService.execute({});
                } catch (e) {
                    console.error(e);
                    hideSpinner();
                };
                try {
                    $a.c15r("lbltranslated", "set", "text", ' ')
                } catch (e) {
                    console.error(e)
                };
            },
        }, '#StudentGuide_mobilecontainer [name="sltSelectPlace"]');
        $(document).off("change", '#StudentGuide_mobilecontainer [name="sltChangeLanguage"]').on({
            change: function(event) {
                try {
                    translateService.execute({});
                } catch (e) {
                    console.error(e);
                    hideSpinner();
                };
            },
        }, '#StudentGuide_mobilecontainer [name="sltChangeLanguage"]');
    };
    $(document).off("pagebeforeshow", "#StudentGuide").on("pagebeforeshow", "#StudentGuide", function(event, ui) {
        Apperyio.CurrentScreen = "StudentGuide";
        _.chain(Apperyio.mappings)
            .filter(function(m) {
                return m.homeScreen === Apperyio.CurrentScreen;
            })
            .each(Apperyio.UIHandler.hideTemplateComponents);
    });
    StudentGuide_onLoad();
};
$(document).off("pagecreate", "#StudentGuide").on("pagecreate", "#StudentGuide", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    StudentGuide_js();
});