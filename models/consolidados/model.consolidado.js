
        var db = require ('../../dbserver');

        var BusinessCategories = db.mongoose.Schema({
                name:String
        });
        var BusinessCategory = db.mongoose.model('businesscategories', BusinessCategories);


        module.exports = BusinessCategory;

    