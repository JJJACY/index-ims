const PAGE ={
	init: function(){
		this.bind();
	},
	bind: function(){
		$('#suB-btn').on('click',this.handlesubmint);
	},
	handlesubmint: function(){
    let classify_name = $('#classify_add').val();
    if(!classify_name){
    	alert('请输入类名')
    	return
    }
    $.ajax({
    	type:'POST',
    	url: 'http://localhost:3000/api/admin/classify',
    	data: {classify_name},
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