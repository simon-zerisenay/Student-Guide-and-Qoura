/**
 * Data models
 */
Apperyio.Entity = new Apperyio.EntityFactory({ 
    "String": {
        "type": "string"
    },
    "Number": {
        "type": "number"
    },
    "Boolean": {
        "type": "boolean"
    }
});
Apperyio.getModel = Apperyio.Entity.get.bind(Apperyio.Entity);
/**
 * Data storage
 */
Apperyio.storage = {
    "Translation_key": new $a.LocalStorage("Translation_key", "String"),
    "Description": new $a.LocalStorage("Description", "String"),
    "Translation_About_Us": new $a.LocalStorage("Translation_About_Us", "String"),
    "QuestionStore1": new $a.LocalStorage("QuestionStore1", "String"),
    "QuestionStore2": new $a.LocalStorage("QuestionStore2", "String")
};
