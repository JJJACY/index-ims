var express = require('express');
var router = express.Router();

var userController = require('./../controllers/user.js');
var classifyController =require('./../controllers/classify.js');
var articleController = require('./../controllers/article.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


router.get('/admin/article',articleController.show);
router.get('/admin/article/create',articleController.create);
router.get('/admin/article/edit',function(req,res,next){
	res.render('admin/article_edit.tpl')
});

router.get('/admin/user',userController.show);
router.get('/admin/user/create',userController.created);
// router.get('/admin/user/edit/:id',function(req,res,next){
// 	res.render('admin/user_edit.tpl')
// })

router.get('/admin/user/edit/:id',userController.single);





router.get('/admin/classify',classifyController.show);
router.get('/admin/classify/create',classifyController.created);

module.exports = router;
