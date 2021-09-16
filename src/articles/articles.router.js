const router = require('express').Router();
const controller = require('./articles.controller');

router.route('/')
    .get(controller.list);

router.route('/new')
    .get(controller.renderNewScreen)
    .post(controller.create);

router.route('/:slug')
    .get(controller.read)
    .delete(controller.delete);

    router.route('/:slug/edit')
    .get(controller.renderEditScreen);
module.exports = router;