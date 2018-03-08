var db = require('../../dbserver');

var Schema = db.mongoose.Schema,
  ObjectId = Schema.ObjectId;



var Consolidados = db.mongoose.Schema({
  _consolidadoId: Schema.Types.ObjectId,
  nombre: String,
  ruta: String
});
var Consolidado = db.mongoose.model('Consolidados',Consolidados);


module.exports = Consolidado;

