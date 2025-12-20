---
layout: layout.html
title: "blog"
---

{% for page in collections.blog %}

- [{{ page.data.title }}]({{ page.url }})
  {% endfor %}