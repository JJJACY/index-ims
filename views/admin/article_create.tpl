{% extends './../admin_layout.tpl' %}

{% block content %}
<div class="page-side">
	<div class="backuser">
		<a href="http://localhost:3000/admin/article">返回文章管理</a>
	</div>
	<div class="articleform-container">
		<div class="article-item">
			<span>标题</span>
			<input id="articleTitle" class="form-input" type="text" name="title">
		</div>
		<div class="article-item">
			<span>分类</span>
			<select id="articleclass" class="form-input">
        <option value="0">请选择分类</option>
        <option value="1" {% if classify_id == 1 %} selected {% endif %}>新闻</option>
        <option value="2" {% if classify_id == 2 %} selected {% endif %}>娱乐</option>
        <option value="3" {% if classify_id == 3 %} selected {% endif %}>电子</option>
        <option value="4" {% if classify_id == 4 %} selected {% endif %}>科技</option>
        <option value="5" {% if classify_id == 5 %} selected {% endif %}>潮流</option>
      </select>
		</div>
		<div id="articleContent" class="article-item">
			<span>内容</span>
			<div>
				<textarea cols="80" id="editor1" name="editor1" rows="10" ></textarea>
			</div>
		</div>
	</div>
	<div class="form-button">
			<button id="suB-btn" class="form-btn">提交</button>
	</div> 
</div>

{% endblock %}

{% block js %}
<script type="text/javascript" src="/javascripts/jquery-3.3.1.min.js" ></script>
<script src="https://cdn.ckeditor.com/4.12.1/standard-all/ckeditor.js"></script>
<script>
  CKEDITOR.replace('editor1', {
    height: 100,
    width: 1200,
  });
 </script>
<script type="text/javascript" src="/javascripts/article_create.js" ></script>

{% endblock %}