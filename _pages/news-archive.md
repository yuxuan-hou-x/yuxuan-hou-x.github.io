---
layout: page
title: news archive
permalink: /news-archive/
description: the archive of (mostly) academic news
nav: false
---

<div class="news">
  {% if site.news %}
    <div class="table-responsive">
      <table class="table table-sm table-borderless">
      {% assign news = site.news | reverse %}
      {% for item in news %}
        {% if item.hide == false %}
          <tr>
            <th scope="row">{{ item.date | date: "%-d %b %Y" }}</th>
            <td>
              {% if item.inline %}
                {{ item.content | remove: '<p>' | remove: '</p>' | emojify }}
              {% else %}
                <a class="news-title" href="{{ item.url | relative_url }}">{{ item.title }}</a>
              {% endif %}
            </td>
          </tr>
        {% endif %}
      {% endfor %}
      </table>
    </div>
  {% else %}
    <p>No news so far...</p>
  {% endif %}
</div>