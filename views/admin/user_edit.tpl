{% extends './../admin_layout.tpl' %}

{% block content %}
<div class="page-content-edit">
	<div class="edit-user">
		<h1>编辑用户</h1>
		<a href="/admin/user/create">返回用户</a>
	</div>

	<div class="editform-container">
		<div class="form-item">
			<input id="editName" class="form-input" type="text" name="name" placeholder="{{name}}">
		</div>
		<div class="form-item">
			<input id="editTel" class="form-input" type="text" name="tel" placeholder="{{tel}}">
		</div>
		<div class="form-item">
			<input id="editCode" class="form-input" type="text" name="code" placeholder="{{password}}">
		</div>
		<div class="hidden">
			<input hidden id="eidtid" value="{{id}}" class="form-input" type="text" name="code" placeholder="id">
		</div>
		<div class="form-button">
			<button id="edit-btn" class="form-btn" >提交</button>
		</div>
	</div>
	<!-- <footer class="page-footer">Copyright © 2019 极客学院体验技术部出品</footer> -->
</div>
{% endblock %}

{% block js %}
<script type="text/javascript" src="/javascripts/jquery-3.3.1.min.js" ></script>
<script type="text/javascript" src="/javascripts/user_edit.js" ></script>
{% endblock %}