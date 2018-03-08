var db = require('../../dbserver');

var Schema = db.Mongoose.Schema,
  ObjectId = Schema.ObjectId;



var Consolidados = db.Mongoose.Schema({
  _consolidadoId: Schema.Types.ObjectId,
  nombre: String,
  ruta: String
});
var Consolidado = db.Mongoose.model('Consolidados');


module.exports = Consolidado;

