---
layout: post
title: Hello World
categories: introduction general
description: An introduction to the website as well as plans for the future.
comments: true
---
# Update
It has been a while!

After finishing most of my work, I found some time and extra time and decided
to work on this website. I put my updates and development for the website
under *Website Development*, instead I want to focus on what this site will
contain context-wise.

My plan is to do posts based on different fields I am studying, as well as
overall posts that would be more general. **Different types of posts include:**

* Topics in Computer Science
  * Neural Networks/Machine Learning
  * Computational and Complexity Theory
  * Web Development
  * Computer Graphics
  * etc...
* General/Update
* Development Log
  * I may keep also keep such logs inside of individual project wikis as well.

As for the current design, I am planning on changing the layout heavily and
doing more development overall.

# Website Development
After a long break from editing this site due to courses and work I decided to
hop back in. However, I wanted to over-haul my initial design and take in a
template approach instead. This would allow me to do basic posts without any
heavy-lifting each time I would create a new page. So I needed to focus on
design.

## Current Design & Implementation
I originally planned on using Bootstrap with AngularJS to do some basic
templating, I would also include JQuery to use Bootstraps different functions
such as Dropdown menus. Unfortunately, I found Angular to be too much effort
for a basic system, and it didn't work well for templating alone unless paired
with a system like Jade in NodeJS/Express.

From reading more into Github Pages, I found that Jekyll was a better solution
since it allowed me to generate the pages instantly, as well as incorporate
Ruby which seemed to be better suited for this situation when compared to
just client-side JavaScript. I could incorporate npm packages and other methods
to templating and using tools such as markdown, but I found that Jekyll does
all of that for me.

## Future Implementation
Currently, the site is based on the default template given by Jekyll. I am
planning on updating this by creating a new, dynamic template based on others
shown in sites such as [JekyllThemes.org](http://jekyllthemes.org/).
Although I could simply download and replace my current site with these themes,
I find that many of them have issues that I would have to search through and
would also do my own implementation as well.

# Conclusion

Overall, I am planning on being more active on this site, as well as make the
site itself more unique. I want to have more posts and active development so
that I gain more for my own research and development in different projects.
