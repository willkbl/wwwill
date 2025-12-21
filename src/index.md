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


If you've somehow stumbled upon this website while this message is still present, it is very much still a work in progress. This website uses the Eleventy framework, but because of my lack of web prowess, it's mostly just plain HTML and CSS.


My name is Will Kibel. I'm currently a third-year student at Northeastern University, pursuing a degree in Computer Science and Game Development. I make music, write, and work on video games. I'm currently a marketing intern at Akupara Games, and have previously worked in IT and as an office assistant at Northeastern.

I'm still trying to figure out the best way to organize this site. I want it to function as a showcase of my music, my games, my marketing work, my writing, and as a general blog/space to dump my every thought into. I don't know the best way to organize that so that both potential employers and myself enjoy it. It's gonna be a learning process.

Stay tuned.


<!--
{% for page in collections.pages %}

- [{{ page.data.title }}]({{ page.url }})
  {% endfor %}
-->