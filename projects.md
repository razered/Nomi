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

<div class='container2'>
        <div>
            <img src='http://ecx.images-amazon.com/images/I/21-leKb-zsL._SL500_AA300_.png' class='iconDetails'>
        </div>  
    <!-- <div style='margin-left:60px;'> -->
    <h2>{{ project.title }}</h2>
    <!-- <div style="font-size:1em">{{ project.content }}</div>
    <a href="{{ project.view_url }}" class="call-to-action" style="float:right;font-size:1em">{{ project.call_to_action}}</a>  -->
</div>

<!-- <h2 id="{{ project.title | slugify }}">{{ project.title }}</h2> -->





{% endfor %}


