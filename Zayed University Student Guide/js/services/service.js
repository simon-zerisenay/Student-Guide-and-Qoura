/*
 * Security contexts
 */
/*
 * Service settings
 */
var StudentGuideDatabase_settings = {
    "database_id": "5e98a3280f0d3102ac5d445d"
}
var About_Us_database_settings = {
    "database_id": "5ea4a50e2e22d77a3232f155"
}
var Question_and_Answer_settings = {
    "database_id": "5e9b3d3a2e22d73fd927b69d"
}
var Log_InandSign_Up_database_settings = {
    "database_id": "5ea750520f0d31044bd5e4af"
}
/*
 * Services
 */
var Question_and_Answer_Question_and_Answer_Collection_list_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/Question_and_Answer_Collection',
    'dataType': 'json',
    'type': 'get',
    'serviceSettings': Question_and_Answer_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});
var Question_and_Answer_Question_and_Answer_Collection_query_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/Question_and_Answer_Collection',
    'dataType': 'json',
    'type': 'get',
    'serviceSettings': Question_and_Answer_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});
var StudentGuideDatabase_StudentGuideCollection_query_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/StudentGuideCollection',
    'dataType': 'json',
    'type': 'get',
    'serviceSettings': StudentGuideDatabase_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});
var Log_InandSign_Up_database_signup_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/users',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',
    'serviceSettings': Log_InandSign_Up_database_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "Content-Type": "application/json",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});
var Question_and_Answer_Question_and_Answer_Collection_create_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/Question_and_Answer_Collection',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',
    'serviceSettings': Question_and_Answer_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "Content-Type": "application/json",
            "X-Appery-Api-Express-Api-Key": ""
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
    }
});
var Log_InandSign_Up_database_logout_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/logout',
    'dataType': 'json',
    'type': 'get',
    'serviceSettings': Log_InandSign_Up_database_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});
var Log_InandSign_Up_database_login_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/login',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',
    'serviceSettings': Log_InandSign_Up_database_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "Content-Type": "application/json",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});
var StudentGuideDatabase_StudentGuideCollection_list_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/StudentGuideCollection',
    'dataType': 'json',
    'type': 'get',
    'serviceSettings': StudentGuideDatabase_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});
var Question_and_Answer_Question_and_Answer_Collection_update_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/Question_and_Answer_Collection/{_id}',
    'dataType': 'json',
    'type': 'put',
    'contentType': 'application/json',
    'serviceSettings': Question_and_Answer_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "Content-Type": "application/json",
            "X-Appery-Api-Express-Api-Key": ""
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
    }
});
var StudentGuideDatabase_ReportCollection_list_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/ReportCollection',
    'dataType': 'json',
    'type': 'get',
    'serviceSettings': StudentGuideDatabase_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});
var StudentGuideDatabase_TranslationCollection_query_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/TranslationCollection',
    'dataType': 'json',
    'type': 'get',
    'serviceSettings': StudentGuideDatabase_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});
var StudentGuideDatabase_TranslationCollection_list_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/TranslationCollection',
    'dataType': 'json',
    'type': 'get',
    'serviceSettings': StudentGuideDatabase_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});
var Question_and_Answer_Question_create_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/Question',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',
    'serviceSettings': Question_and_Answer_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "Content-Type": "application/json",
            "X-Appery-Api-Express-Api-Key": ""
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
    }
});
var Question_and_Answer_Question_list_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/Question',
    'dataType': 'json',
    'type': 'get',
    'serviceSettings': Question_and_Answer_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});
var SendGridEmail_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/code/5ef2d8f7-4897-4680-b7a4-3029532b4396/exec',
    'dataType': 'json',
    'type': 'get',
    'defaultRequest': {
        "headers": {
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});
var About_Us_database_About_Us_list_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/About_Us',
    'dataType': 'json',
    'type': 'get',
    'serviceSettings': About_Us_database_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});
var Translate_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/code/84068523-72a1-43c6-82b6-3ae0fe2a4fc3/exec',
    'dataType': 'json',
    'type': 'get',
    'defaultRequest': {
        "headers": {
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});