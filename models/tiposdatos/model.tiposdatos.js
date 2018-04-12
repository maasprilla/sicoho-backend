var db = require('../../dbserver');

var Schema = db.mongoose.Schema,
  ObjectId = Schema.ObjectId;



var TiposDatos = db.mongoose.Schema({
  _tipoDatoId: Schema.Types.ObjectId,
  nombre: String,
  tipo: String
});

var TipoDato = db.mongoose.model('TipoDato', TiposDatos);


module.exports = TipoDato;

