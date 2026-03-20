---
layout: page
permalink: /publications
title: publications
description: publications by categories in reversed chronological order
preprints_years: [2023]
articles_years: [2023, 2022, 2021]
theses_years: [2020, 2017]
nav: true
nav_order: 4
dropdown: true
children: 
    - title: preprints
      permalink: /publications/preprints
    - title: articles
      permalink: /publications/articles
    - title: theses
      permalink: /publications/theses
---

<!-- _pages/publications.md -->
<div class="publications">

  Up-to-date list of publications available on <a href="https://scholar.google.com/citations?user=Ufpa6SIAAAAJ">Google Scholar</a>, <a href="https://www.researchgate.net/profile/Matteo-Barbetti">ResearchGate</a> or <a href="https://inspirehep.net/authors/1908127">Inspire HEP</a>.

  <h2 class="pub-type">preprints</h2>
  {%- for y in page.preprints_years -%}
    <h2 class="year">{{y}}</h2>
    {%- bibliography -f preprints -q @*[year={{y}}]* -%}
  {%- endfor -%}

  <h2 class="pub-type">conference & journal articles</h2>
  {%- for y in page.articles_years -%}
    <h2 class="year">{{y}}</h2>
    {%- bibliography -f articles -q @*[year={{y}}]* -%}
  {%- endfor -%}

  <h2 class="pub-type">theses</h2>
  {%- for y in page.theses_years -%}
    <h2 class="year">{{y}}</h2>
    {%- bibliography -f theses -q @*[year={{y}}]* -%}
  {% endfor %}

  <h2 class="pub-type">preprints</h2>
    {%- for y in page.preprints_years -%}
      <h2 class="year">{{y}}</h2>
      {%- bibliography -f preprints -q @*[year={{y}}]* -%}
    {%- endfor -%}

  <h2 class="pub-type">conference & journal articles</h2>
    {%- for y in page.articles_years -%}
      <h2 class="year">{{y}}</h2>
      {%- bibliography -f articles -q @*[year={{y}}]* -%}
    {%- endfor -%}

  <h2 class="pub-type">theses</h2>
    {%- for y in page.theses_years -%}
      <h2 class="year">{{y}}</h2>
      {%- bibliography -f theses -q @*[year={{y}}]* -%}
    {% endfor %}

</div>