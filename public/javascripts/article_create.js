const PGAE ={
	init:function(){
		this.bind();
	},
	bind: function(){
		$('#suB-btn').on('click',this.handleSubmit);

	},
	handleSubmit: function(){
		let  title = $('#articleTitle').val();

		let  classify_id = $('#articleclass').val();

    let  content =CKEDITOR.instances.editor1.getData();


		if(!title || !content || !classify_id){
			alert('请输入参数')
			return
		}
		$.ajax({
			type: 'POST',
			url: 'http://localhost:3000/api/admin/',
			data: {title,content,classify_id},
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
PGAE.init();