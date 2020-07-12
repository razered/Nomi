---
layout: page
title: Projects
description: Things I've built and associated source code.
body-class: projects
redirect_from:
  - /projects/
---

# Projects

{% assign sorted_projects = site.projects | sort: 'position' %}

{% for project in sorted_projects %}


<img src='http://ecx.images-amazon.com/images/I/21-leKb-zsL._SL500_AA300_.png' class='iconDetails'>

<h2>{{ project.title }}</h2>




{% endfor %}


