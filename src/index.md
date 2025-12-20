---
layout: layout.html
title: "wwwill kibel"
---

<!--
TO RUN:
    npx @11ty/eleventy --serve
-->

Here is the front page for my website. Woohoo!


If you've somehow stumbled upon this website while this message is still present, it is very much still a work in progress.


My name is Will Kibel. I make music, write, and work on video games.
I'm currently a marketing intern at Akupara Games, and have previously
worked in IT. I have a wide variety of skills, and I've gotten very good
at applying them in a wide variety of ways. Web dev is not yet one of those
skills, but I'm working on it.

Stay tuned.


{% for post in collections.posts %}

- [{{ post.data.title }}]({{ post.url }})
  {% endfor %}