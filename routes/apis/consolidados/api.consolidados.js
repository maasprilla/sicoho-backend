var express = require('express');

var controller = require('../../../controllers/consolidados/controller.consolidados');

console.log('api');
var router = express.Router();
router.post('/', controller.index);
//router.get('/:id', controller.show);
//router.get('/iduser/:iduser', controller.findByUser);
//router.post('/', controller.create);
//router.put('/picture/:id', controller.updatePicture);

// router.put('/:id', controller.update);
// router.patch('/:id', controller.update);
// router.delete('/:id', controller.destroy);


module.exports = router;

