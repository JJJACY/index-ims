 <!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>{{seo.title}}</title>
    <link rel="stylesheet" href="/stylesheets/reset.css"/>
    <link rel="stylesheet" href="/stylesheets/style.css"/>
    {% block css %}
    {% endblock %}
</head>
<body>
  <div class="wrapper">
    <header class="page-header">
      <div class="header-logo">
        <img src="/images/logo.png" alt="jike-logo"/>
        <span class="header-logo-text">信息管理</span>
      </div>
      <div class="user-info">
        <!-- <span>{{userInfo.name}}</span> -->
        <a class="logout" href="javascript:;">退出系统</a>
      </div>
    </header>
    <div class="page-body">
      <div class="page-aside">
        <nav class="page-nav">
          <ul>
            <li>
              <a id="Admin-tag" class="page-nav-item {% if nav == 'user' %}active{% endif %}" href="/admin/user">用户管理</a>
            </li>
            <li>
              <a id="Classify-tag" class="page-nav-item {% if nav == 'classify' %}active{% endif %}" href="/admin/classify">分类管理</a>
            </li>
            <li>
              <a id="Article-tag" class="page-nav-item {% if nav == 'article' %}active{% endif %}" href="/admin/article">文章管理</a>
            </li>
          </ul>
        </nav>
      </div>

      {% block content %}
      {% endblock %}
      
    </div>
    
  </div>

    {% block js %}
    {% endblock %}
</body>
</html>