var express = require('express');
var router = express.Router();

var userController =require('./../controllers/user.js')
var classifyController = require('./../controllers/classify.js')
var articleController = require('./../controllers/article.js')
/* GET users listing. */
router.get('/admin',userController.show);
router.post('/admin',userController.insert);
router.delete('/admin/:id',userController.delete);
router.put('/admin/:id',userController.update);



router.post('/admin/classify',classifyController.insert);
router.post('/admin/article',articleController.insert);
router.delete('/article/:id',articleController.delete);

router.put('/admin/user/edit/:id',userController.single);
module.exports = router;


