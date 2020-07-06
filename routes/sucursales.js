const express = require('express');
const router = express.Router();

const sucController = require('../controller/sucursalesController');

router.get('/',sucController.index);
router.get('/:sucursal',sucController.mostrar)

module.exports = router;