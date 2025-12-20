---
layout: layout.html
title: "wwwill kibel"
---

<!--
TO RUN:
    npx @11ty/eleventy --serve
-->

Here is the front page for my website. Woohoo!


If you've somehow stumbled upon this website while this message is still present, it is very much still a work in progress. This website uses the Eleventy framework, but because of my lack of web prowess, it's mostly just HTML and CSS.


My name is Will Kibel. I make music, write, and work on video games.
I'm currently a marketing intern at Akupara Games, and have previously
worked in IT. I have a wide variety of skills, and I've gotten very good
at applying them in a wide variety of ways. Web dev is not yet one of those
skills, but I'm working on it.

Stay tuned.


{% for page in collections.pages %}

- [{{ page.data.title }}]({{ page.url }})
  {% endfor %}