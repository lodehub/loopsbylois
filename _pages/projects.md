---
layout: default
title: Projects
permalink: /projects/
---

<div class="page-header">
  <p class="page-eyebrow">Portfolio</p>
  <h1 class="page-title">All <em>work</em></h1>
</div>

<div class="filter-bar">
  <span class="filter-label">Filter</span>
  <button class="filter-btn active" data-cat="all">All</button>
  <button class="filter-btn" data-cat="crochet">Crochet</button>
  <button class="filter-btn" data-cat="procreate">Procreate</button>
  <button class="filter-btn" data-cat="sketches">Sketches</button>
  <button class="filter-btn" data-cat="writing">Writing</button>
  <span class="count-label" id="count-label"></span>
</div>

<div class="grid-wrapper">
  <div class="projects-grid" id="grid">

    {% assign all_pieces = site.crochet | concat: site.procreate | concat: site.sketches | concat: site.writing | sort: 'date' | reverse %}
    {% for piece in all_pieces %}
    <a class="project-card" href="{{ piece.url | relative_url }}" data-cat="{{ piece.category }}">
      <div class="card-thumb {{ piece.category }}">
        <div class="cat-dot {{ piece.category }}"></div>
        {% if piece.thumbnail %}
          <img src="{{ piece.thumbnail | relative_url }}" alt="{{ piece.title }}">
        {% else %}
          <span class="card-thumb-placeholder">{{ piece.category | capitalize }}</span>
        {% endif %}
      </div>
      <div class="card-body">
        <div class="card-meta">
          <p class="card-cat">{{ piece.category | capitalize }}</p>
          {% if piece.type %}<span class="card-type-badge">{{ piece.type }}</span>{% endif %}
        </div>
        <h2 class="card-title">{{ piece.title }}</h2>
        {% if piece.description %}<p class="card-desc">{{ piece.description }}</p>{% endif %}
      </div>
    </a>
    {% endfor %}

    <div class="no-results" id="no-results" style="display:none;grid-column:1/-1;text-align:center;padding:4rem 0;">
      <p style="font-family:var(--font-display);font-style:italic;color:var(--ink-muted);font-size:1.1rem;">Nothing here yet — check back soon.</p>
    </div>

  </div>
</div>

<script>
  const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');
  const countLabel = document.getElementById('count-label');
  const noResults = document.getElementById('no-results');

  function updateCount(n) {
    countLabel.textContent = n + (n === 1 ? ' piece' : ' pieces');
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.cat;
      let visible = 0;
      cards.forEach(card => {
        const match = cat === 'all' || card.dataset.cat === cat;
        card.classList.toggle('hidden', !match);
        if (match) visible++;
      });
      noResults.style.display = visible === 0 ? 'block' : 'none';
      updateCount(visible);
    });
  });

  updateCount(cards.length);
</script>
