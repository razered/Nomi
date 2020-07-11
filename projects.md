---
layout: page
title: Projects
description: Things I've built and associated source code.
body-class: projects
redirect_from:
  - /projects/
---

# Blog

{% assign sorted_projects = site.projects | sort: 'position' %}

{% for project in sorted_projects %}

<h2 id="{{ project.title | slugify }}">{{ project.title }}</h2>

{{ project.content }}

<a href="{{ project.view_url }}" class="call-to-action">{{ project.title }}</a>

{% endfor %}


