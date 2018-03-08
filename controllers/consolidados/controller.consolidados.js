var filessystem = require('fs');
var dir = './models/consolidados/';
var createIfNotExist = require("create-if-not-exist");
var Consolidado = require('../../models/consolidados/model.adminconsolidados');

module.exports.index = function (req, res) {
    if (!dirExist(dir)) {
        console.log('no existe dir');
        filessystem.mkdirSync(dir);
        console.log('creo carpeta');
        createFile(dir);
    } else {
        console.log("Directory already exist");
        createFile(dir);
    }
    res.send('dentro del rest');
}


function dirExist(dir) {
    if (filessystem.existsSync(dir)) {
        return true;
    } else {
        return false;
    }
}

function createFile(dir) {
    console.log('creando archivo');
    createIfNotExist(dir + 'model.consolidado.js', `
        var db = require ('../../dbserver');

        var BusinessCategories = db.mongoose.Schema({
                name:String
        });
        var BusinessCategory = db.mongoose.model('businesscategories', BusinessCategories);


        module.exports = BusinessCategory;

    `);


    var consolidado = new Consolidado({
        nombre: "miguel",
        ruta: "angel"
    });
    consolidado.save(function (err) {
        if (err) {
            res.json({
                success: true,
                message: 'Error al Registar Usuario'
            });
        }
    });


}

