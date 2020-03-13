let router = require('express').Router();
var user = require('../controller/userController');

router.post('/create', user.createUser);
router.get('/users',user.getAllUsers);
router.route('/users/:id')
    .patch(user.update)
    .put(user.update)
    .delete(user.delete)
module.exports = router;
