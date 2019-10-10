const Article = require('./../models/article.js');

const articleController ={
	show:async function( req,res,next){
		try{
			const article = await Article.all()
			res.locals.article = article
			res.render('admin/article.tpl',res.locals)
		}catch(err){
      console.log(err)
      res.json({ code: 0,message: '错误'})
		}	
	},
	insert: async function(req, res,next){
		let title = req.body.title;
		let content = req.body.content;
		let classify_id = req.body.classify_id;
		if( !title || !content || !classify_id){
			res.json({ code: 0 , message: ' 缺少必要参数'})
			return
		}	
		try{	
      const users = await Article.insert({
      	title, content
      });
      res.json({ code : 200,message: '增加成功'})
		}catch(err){
			console.log(err)
			res.json({ code:0, message: '内部错误'})
		}
	},
	delete: async function(req,res,next){
		let id = req.params.id;
		let is_delete = 1;
		try{
			const user =await User.update(id,{is_delete})
        res.json({ code: 200,message:'删除成功'})
		}catch(err){
			console.log(e)
			  res.json({ code:0, message:'内部错误'})
		}
	},
	create: async function(req,res,next){
		res.render('admin/article_create.tpl');
	}
}

module.exports = articleController;