---
layout: page
permalink: /publications/articles
title: publications
description: publications by categories in reversed chronological order
years: [2023, 2022, 2021]
nav: false
---

<div class="publications">

  Up-to-date list of publications available on <a href="https://scholar.google.com/citations?user=Ufpa6SIAAAAJ">Google Scholar</a>, <a href="https://www.researchgate.net/profile/Matteo-Barbetti">ResearchGate</a> or <a href="https://inspirehep.net/authors/1908127">Inspire HEP</a>.

  <h2 class="pub-type">conference & journal articles</h2>
    {%- for y in page.years -%}
      <h2 class="year">{{y}}</h2>
      {%- bibliography -f articles -q @*[year={{y}}]* -%}
    {%- endfor -%}

</div>
