---
layout: layout.html
title: "home"
---

<!--
TO RUN:
    npx @11ty/eleventy --serve
-->


<p align="center">
  <img width=200 height=200 src="images/me.png" />
</p>


Here is the front page for my website. Woohoo!


If you've somehow stumbled upon this website while this message is still present, it is very much still a work in progress. This website uses the Eleventy framework to allow me to use a blend of HTML/CSS and Markdown. I don't need a flashy web framework to convey what I want to convey. In addition, I believe that well-designed websites in general should be simpler and less flashy, hence this approach.


My name is Will Kibel. I'm currently a third-year student at Northeastern University, pursuing a degree in Computer Science and Game Development. I make music, write, and work on video games. I just wrapped up a marketing internship at indie video game publisher Akupara Games, and have previously worked in IT and as an office assistant at Northeastern.

Stay tuned.


<!--
{% for page in collections.pages %}

- [{{ page.data.title }}]({{ page.url }})
  {% endfor %}
-->