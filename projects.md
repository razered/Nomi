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

<!-- start block -->
<div id="projectbox"> 
{% for project in sorted_projects %}

<!-- start product -->       
<div class="project">
  <div class="project_img">
    <img src="http://thumbs.ebaystatic.com/images/m/m4JYJFjgp9rwTii4MicWiDA/s-l225.jpg">
  </div>
<div class="project_content"> 
  <h2 id="{{ project.title | slugify }}">{{ project.title }}</h2>
  <div class="clear"></div>
  <div class="product_overview">What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?
  What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?
  What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?</div>
  <a href="{{ project.view_url }}" class="call-to-action">{{ project.call_to_action }}</a>
<div class="clear"></div>
</div>

{% endfor %}
</div>       
<!-- end of block -->