---
layout: about
title: About
permalink: /
subtitle: 
  Personal website of Yuxuan Hou

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false # crops the image to make it circular
  address: # >
    # <p>555 your office number</p>
    # <p>123 your address street</p>
    # <p>Your City, State 12345</p>

news: true
latest_posts: false  # includes a list of the newest posts
selected_papers: false # disable template sample publications on the homepage
social: false  # includes social icons at the bottom of the page
---

Welcome to my personal website. Here you can find information about my background, CV, and publications.

<div class="about-section-divider"></div>

<section id="publications" class="about-section-block">
  <h2>Publications</h2>
  <div class="publications">
    {% bibliography -f yuxuan_selected %}
  </div>
  <p class="mt-3">
    For the full and most up-to-date list, please visit
    <a href="https://scholar.google.com/citations?user=wojeuO8AAAAJ&hl=zh-CN" target="_blank" rel="noopener noreferrer">my Google Scholar profile</a>.
  </p>
</section>

<!--
Write your biography here. Tell the world about yourself. Link to your favorite [subreddit](http://reddit.com). You can put a picture in, too. The code is already in, just name your picture `prof_pic.jpg` and put it in the `img/` folder.

Put your address / P.O. box / other info right below your picture. You can also disable any of these elements by editing `profile` property of the YAML header of your `_pages/about.md`. Edit `_bibliography/papers.bib` and Jekyll will render your [publications page](/al-folio/publications/) automatically.

Link to your social media connections, too. This theme is set up to use [Font Awesome icons](http://fortawesome.github.io/Font-Awesome/) and [Academicons](https://jpswalsh.github.io/academicons/), like the ones below. Add your Facebook, Twitter, LinkedIn, Google Scholar, or just disable all of them.
-->
