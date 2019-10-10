{% extends './../admin_layout.tpl' %}

{% block content %}
<div class="page-side">
	<div class="backuser">
		<a href="/admin/user">返回用户管理</a>
	</div>
	<div class="form-container">
		<div class="form-item">
			<input id="userName" class="form-input" type="text" name="name" placeholder="姓名">
		</div>
		<div class="form-item">
			<input id="userTel" class="form-input" type="text" name="tel" placeholder="电话">
		</div>
		<div class="form-item">
			<input id="userCode" class="form-input" type="text" name="code" placeholder="密码">
		</div>
		<div class="form-button">
			<button id="suB-btn" class="form-btn">提交</button>
		</div> 
	</div>

</div>

{% endblock %}

{% block js %}
<script type="text/javascript" src="/javascripts/jquery-3.3.1.min.js" ></script>
<script type="text/javascript" src="/javascripts/user_create.js" ></script>
{% endblock %}