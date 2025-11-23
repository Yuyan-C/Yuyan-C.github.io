---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

You can also find my publications on <a href="{{site.author.googlescholar}}">my Google Scholar.

\* denotes equal contribution.

{% assign pubs = site.publications | sort: "year" | reverse %}

{% for p in pubs %}
- **{{ p.title }}**  
    {% capture author_name %}{{ site.author.name }}{% endcapture %}
    {% capture author_underline %}<u>{{ author_name }}</u>{% endcapture %}
    {{ p.authors | replace: author_name, author_underline }}, {{ p.venue }}
    <div class="pub-links">
        {% capture links %}
            {% if p.paper_url %}<a href="{{ p.paper_url }}">Paper</a>{% endif %}
            {% if p.code_url %}<a href="{{ p.paper_url }}">Code</a>{% endif %}
            {% if p.dataset_url %}<a href="{{ p.paper_url }}">Dataset</a>{% endif %}
            {% if p.project_url %}<a href="{{ p.project_url }}">Project</a>{% endif %}
        {% endcapture %}
        {{ links | strip }}
    </div>

{% endfor %}

