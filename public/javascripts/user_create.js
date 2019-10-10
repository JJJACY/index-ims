const PAGE ={
	init: function(){
		this.bind();
	},
	bind: function(){
    $('#suB-btn').on('click',this.handleSubmit);

	},
	handleSubmit: function(){
		let  name = $('#userName').val();
		let  tel = $('#userTel').val();
		let password = $('#userCode').val();

		if(!name || !tel || !password){
			alert('请输入参数')
			return
		}
		$.ajax({
			type: 'POST',
			url: 'http://localhost:3000/api/admin/',
			data: {name,tel ,password},
			beforesend: function(){
				$('#suB-btn').attr('disabled',true);
			},
			success: function(data){
				if(data.code ==200){
					alert('新增成功')
					location.herf= 'admin/'
				}else{
					alert(data.message)
				}
			},
			error: function(err){
				console.log(err)
			},
			aftersend: function(){
				$('#suB-btn').attr('disabled',false);
			}
		})
	}
}
PAGE.init();
