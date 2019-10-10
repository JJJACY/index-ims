const User = require('./../models/user.js');
//const {formatTime} =require('./../utils/date.js');
const userController ={
	show:async function( req,res,next){
		try{
			const user = await User.all()
			res.locals.user = user
			res.render('admin/user.tpl',res.locals)
		}catch(err){
      console.log(err)
      res.json({ code: 0,message: '错误'})
		}	
	},
	insert: async function(req, res,next){
		let name = req.body.name;
		let tel = req.body.tel;
		let password = req.body.password;
		// let creat_time= new Date();
		if( !name || !tel || !password){
			res.json({ code: 0 , message: ' 缺少必要参数'})
			return
		}	
		try{	
      const users = await User.insert({
      	name,tel,password
      });
      res.json({ code : 200,message: '增加成功'})
		}catch(err){
			console.log(err)
			res.json({ code:0, message: '内部错误'})
		}
	},
	update: async function(req,res,next){
		let name = req.body.name;
		let tel = req.body.tel;
		let password =req.body.password;
		let id = req.params.id;
		if(!name || !tel || !password){
			res.json({code: 0 ,message: '缺少必要参数'})
		}
    try{	
      const users = await User.update(id,{
      	name,tel,password
      });
      res.json({ code : 200,message: '修改成功'})
		}catch(err){
			console.log(err)
			res.json({ code: 0, message: '内部错误'})
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
	created: async function(req,res,next){
		res.render('admin/user_create.tpl');
	},
	single: async function(req,res,next){
		let id = req.params.id;
		res.locals.id = id;
		console.log(id)
		res.render('admin/user_edit.tpl',res.locals);
	}
}

module.exports = userController;