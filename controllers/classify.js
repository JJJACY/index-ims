const Classify = require('./../models/classify.js');

const classifyController ={
	show:async function( req,res,next){
		try{
			const classify = await Classify.all()
			res.locals.classify = classify
			res.render('admin/classify.tpl',res.locals)
		}catch(err){
      console.log(err)
      res.json({ code: 0,message: '错误'})
		}	
	},
	insert: async function(req,res,next){
		let classify_name  = req.body.classify_name;
		if(!classify_name){
			res.json({code:0, message:'缺少名字'})
			return
		}
		try{
			const classifys  = await Classify.insert({
				classify_name
			});
			res.json({code : 200, message:'增加成功'})
		}catch(err){
			console.log(err)
			res.json({code: 0, message:'内部错误'})
		}
	},
	created: async function(req,res,next){
		res.render('admin/classify_create.tpl')
	}
}

module.exports =  classifyController;