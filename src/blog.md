---
layout: layout.html
title: "blog"
---

<p style="margin-bottom: -20px;"> &nbsp; </p>

{% for page in collections.blog reversed %}
- <a style='font-family: "Roboto Slab", "Oswald", "Segoe UI", sans-serif;
' href="{{ page.url }}" target="_self"><b>{{ page.data.title }}</b></a> - {{ page.data.date-posted }}
  {% endfor %}

