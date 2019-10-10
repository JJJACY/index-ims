const PAGE ={
	init: function(){
		this.bind();
	},
	bind: function(){
    $('#edit-btn').on('click',this.handleSubmit);

	},
	handleSubmit: function(){
		let  name = $('#editName').val();
		let  tel = $('#editTel').val();
		let  password = $('#editCode').val();
        let  id = $('#eidtid').val();
		if(!name || !tel || !password){
			alert('请输入参数')
			return
		}
		$.ajax({
			type: 'PUT',
			url: 'http://localhost:3000/api/admin/' +id ,
			data: {name,tel ,password},
			beforesend: function(){
				$('#suB-btn').attr('disabled',true);
			},
			success: function(data){
				if(data.code ==200){
					alert('编辑成功')
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
