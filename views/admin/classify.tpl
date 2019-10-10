{% extends './../admin_layout.tpl' %}

{% block content %}
<div class="page-content-classify">
	<div class="add-classify">
		<a href="http://localhost:3000/admin/classify/create">添加分类</a>
	</div>
	<div class="content-classify-table">
		<table id="classify-id">
			<thead>
				<tr>
					<th>id</th>
					<th>分类名称</th>
					<th>操作</th>
				</tr>
			</thead>
			<tbody>
				{% for val in classify %}
				<tr>
					<td>{{val.id}}</td>
					<td>{{val.classify_name}}</td>
					<td>
						<a class="edit" href="javascript:;">编辑</a>
						<a class="del" data-id="{{val.id}}" href="javascript:;">删除</a>
					</td>
				</tr>
				{%  endfor %}
			</tbody>
		</table>
	</div>
	<footer class="page-footer">Copyright © 2019 极客学院体验技术部出品</footer>
</div>
{% endblock %}