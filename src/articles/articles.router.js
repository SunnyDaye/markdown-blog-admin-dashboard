const router = require('express').Router();
const controller = require('./articles.controller');

router.route('/')
    .get(controller.list);
    
router.route('/new')
    .get(controller.create);
module.exports = router;