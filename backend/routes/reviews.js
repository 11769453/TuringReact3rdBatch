var express = require('express');
var router = express.Router();
let review = require('../controllers/ReviewController');

router.get('/',review.getAllReview);
router.get('/:reviewId',review.getReviewById);
router.post('/',review.saveReview);

module.exports = router;