const express = require('express');
const router = express.Router();
const handlersBikes = require('../handlers/bikes');

router
    .route('/')
    .post(handlersBikes.createBike)
    .get(handlersBikes.getAllBikes);

router
    .route('/:id')
    .get(handlersBikes.getOneBike)
    .put(handlersBikes.updateOneBike)
    .delete(handlersBikes.deleteOneBike);

router
    .route('/:brand')
    .get(handlersBikes.getByBrand)

    
router
    .route('/:isElectrique')
    .get(handlersBikes.getByBrand)

module.exports = router;