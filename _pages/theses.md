---
layout: page
permalink: /publications/theses
title: publications
description: publications by categories in reversed chronological order
years: [2020, 2017]
nav: false
---

<div class="publications">

  Up-to-date list of publications available on <a href="https://scholar.google.com/citations?user=Ufpa6SIAAAAJ">Google Scholar</a>, <a href="https://www.researchgate.net/profile/Matteo-Barbetti">ResearchGate</a> or <a href="https://inspirehep.net/authors/1908127">Inspire HEP</a>.

  <h2 class="pub-type">theses</h2>
    {%- for y in page.years -%}
      <h2 class="year">{{y}}</h2>
      {%- bibliography -f theses -q @*[year={{y}}]* -%}
    {% endfor %}

</div>
