var db = require ('../../dbserver');

var Consolidados = db.mongoose.Schema({
       _consolidadoId: Schema.Types.ObjectId,
       nombre:String,
       ruta:String
     });
var Consolidado = db.mongoose.model('Consolidados');


module.exports = Consolidado;

