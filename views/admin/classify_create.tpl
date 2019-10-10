{% extends './../admin_layout.tpl' %}

{% block content %}
<div class="page-side">
	<div class="backuser">
		<a href="/admin/classify">返回分类管理</a>
	</div>
	<div class="form-container">
		<div class="classifyform-item">
			<!-- <input id="classify_add" class="form-input" type="text" name="classify" placeholder="添加分类"> -->
			<select id="classify_add" class="form-input">
        <option value="0">请选择分类</option>
        <option value="1" {% if classify_id == 1 %} selected {% endif %}>新闻</option>
        <option value="2" {% if classify_id == 2 %} selected {% endif %}>娱乐</option>
        <option value="3" {% if classify_id == 3 %} selected {% endif %}>电子</option>
        <option value="4" {% if classify_id == 4 %} selected {% endif %}>科技</option>
        <option value="5" {% if classify_id == 5 %} selected {% endif %}>潮流</option>
      </select>
		</div>
		<div class="form-button">
			<button id="suB-btn" class="form-btn">提交</button>
		</div> 
	</div>
</div>

{% endblock %}

{% block js %}
<script type="text/javascript" src="/javascripts/jquery-3.3.1.min.js" ></script>
<script type="text/javascript" src="/javascripts/classify_create.js" ></script>
{% endblock %}
