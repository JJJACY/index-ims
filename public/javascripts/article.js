const PAGE ={
	init: function(){
    this.bind();
	},
	bind: function(){
    $('#article-id').on('click','.del',this.handledel);
	},
	handledel: function(e){
    let id = $(e.target).data('id');
    let del = confirm('确认删除文章');
    if(del){
    	$.ajax({
				type: 'DELETE',
				 url: '/api/article/'+id,
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
			})  n n 
    }
	},	
}
PAGE.init();