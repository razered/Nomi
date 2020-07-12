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
<div class="product_img"><img src="http://thumbs.ebaystatic.com/images/m/m4JYJFjgp9rwTii4MicWiDA/s-l225.jpg"></div>
<div class="product_content"> 
  <div class="product_title"><a href="">NWT New Polo Ralph Loren Adjustable Strap Pony Logo Baseball Hat Cap 1 Size</a></div>
  <div class="clear"></div>
  <div class="product_special">Free Shipping ! 30 Day Warranty ! USA Seller</div>
<div class="clear"></div>



{% endfor %}
</div>       
<!-- end of block -->