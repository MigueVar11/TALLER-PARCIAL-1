const express = require('express');
const router = express.Router();

const productsRouter = require('./products.router');

const automovilesRouter = require ('./automoviles.router')

router.use('/productos', productsRouter);
router.use('/automoviles', automovilesRouter);

module.exports = router;



