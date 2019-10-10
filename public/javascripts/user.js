const PAGE ={
	init: function(){
    this.bind();
	},
	bind: function(){
    $('#id-tbody').on('click','.del',this.handledel);
	},
	handledel: function(e){
    let id = $(e.target).data('index');
    let del = confirm('确认删除文章');
    if(del){
    	$.ajax({
				type: 'DELETE',
				url: '/api/admin/'+id,
				data:{},
				success: function(data){
					if(data.code ==200){
						alert('删除成功')
					}else{
						alert(data.message)
					}
				},
				error: function(err){
					console.log(err)
				}
			})
    }
	},	
}
PAGE.init();