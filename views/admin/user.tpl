{% extends './../admin_layout.tpl' %}

{% block content %}
<div class="page-content-user">
	<div class="add-user">
		<a href="/admin/user/create">添加管理</a>
	</div>
	<div class="content-user-table">
		<table id="id-tbody">
			<thead>
				<tr>
					<th>id</th>
					<th>姓名</th>
					<th>电话</th>
					<th>密码</th>
					<th>操作</th>
				</tr>
			</thead>
			<tbody >
				{% for val in user %}
				<tr>
					<td>{{val.id}}</td>
					<td>{{val.name}}</td>
					<td>{{val.tel}}</td>
					<td>{{val.password}}</td>
					<td>
						<a id="User-edit" class="edit" href="/admin/user/edit/{{val.id}}">编辑</a>
						<a id="User-del" class="del" data-index="{{val.id}}"	href="javascript:;">删除</a>
					</td>
				</tr>	
				{% endfor %}
			</tbody>
		</table>
	</div>
	<footer class="page-footer">Copyright © 2019 极客学院体验技术部出品</footer>
</div>
{% endblock %}

{% block js %}
<script type="text/javascript" src="/javascripts/jquery-3.3.1.min.js" ></script>
<script type="text/javascript" src="/javascripts/user.js" ></script>
{% endblock %}