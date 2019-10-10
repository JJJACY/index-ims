{% extends './../admin_layout.tpl' %}



{% block content %}
<div class="page-content-article">
	<div class="add-article">
		<a href="http://localhost:3000/admin/article/create">添加文章</a>
	</div>
	<div class="content-article-table">
		<table id="article-id">
			<thead>
				<tr>
					<th>classify_id</th>
					<th>分类名称</th>
					<th>标题</th>
					<th>操作</th>
				</tr>
			</thead>
			<tbody>
				{% for val in article %}
				<tr>
					<td>{{val.classify_id}}</td>
					<td>{{val.title}}</td>
					<td>{{val.content}}</td>
					<td>
						<a class="edit" href="javascript:;">编辑</a>
						<a class="del" data-id="{{val.id}} "href="javascript:;">删除</a>
					</td>
				</tr>
				{% endfor%}
			</tbody>
		</table>
	</div>
	<footer class="page-footer">Copyright © 2019 极客学院体验技术部出品</footer>
</div>
{% endblock %}

{% block js %}
<script type="text/javascript" src="/javascripts/jquery-3.3.1.min.js" ></script>
<script type="text/javascript" src="/javascripts/article.js" ></script>
{% endblock%}