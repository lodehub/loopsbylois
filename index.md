---
layout: default
title: Home
---

<section class="hero">
  <div class="hero-left">
    <p class="hero-eyebrow">Creative Portfolio</p>
    <h1 class="hero-title">Made with<br>care &amp; <em>intention</em></h1>
    <!-- PLACEHOLDER: Replace the text below with a sentence or two about who Lois is and what she makes -->
    <p class="hero-desc">Hello, I'm Lois — a creative based in [your location]. I make thoughtful, handcrafted work that finds beauty in the everyday.</p>
    <a class="btn" href="{{ '/projects/' | relative_url }}">View my work →</a>
  </div>
  <div class="hero-right">
    <div class="hero-photo">
      <!-- PLACEHOLDER: Replace with a photo of Lois. Put the file in assets/images/ and update the src below -->
      <!-- <img src="{{ '/assets/images/lois-hero.jpg' | relative_url }}" alt="Lois"> -->
      <div class="hero-photo-placeholder">Your photo<br>here</div>
    </div>
  </div>
</section>

<div class="intro-strip">
  <!-- PLACEHOLDER: Replace with a short quote from Lois — something personal that captures her creative spirit -->
  <p>"Every project starts with a feeling — I let that guide everything else."</p>
</div>

<section class="projects-section">
  <div class="section-header">
    <h2 class="section-title">Selected work</h2>
    <a class="section-link" href="{{ '/projects/' | relative_url }}">All projects →</a>
  </div>

  <div class="projects-grid">
    {% assign all_pieces = site.crochet | concat: site.procreate | concat: site.sketches | concat: site.writing | sort: 'date' | reverse %}
    {% for piece in all_pieces limit: 6 %}
    <a class="project-card" href="{{ piece.url | relative_url }}">
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
        <h3 class="card-title">{{ piece.title }}</h3>
        {% if piece.description %}<p class="card-desc">{{ piece.description }}</p>{% endif %}
      </div>
    </a>
    {% endfor %}
  </div>
</section>

<section class="about-strip" style="background:var(--blush);display:grid;grid-template-columns:1fr 1fr;min-height:360px;">
  <div class="about-left" style="padding:4rem 5rem;display:flex;flex-direction:column;justify-content:center;">
    <p class="page-eyebrow">About me</p>
    <h2 class="page-title" style="font-size:2.2rem;margin-bottom:1.2rem;">The person<br>behind the <em>work</em></h2>
    <!-- PLACEHOLDER: 1–2 sentences about Lois -->
    <p style="font-size:0.95rem;line-height:1.8;color:var(--ink-light);max-width:40ch;margin-bottom:2rem;">[A sentence or two about who you are, where you're based, and what drives your creative practice.]</p>
    <a href="{{ '/about/' | relative_url }}" style="font-size:0.78rem;text-transform:uppercase;letter-spacing:0.14em;color:var(--ink);text-decoration:none;border-bottom:1px solid var(--ink);padding-bottom:2px;align-self:flex-start;">Read more about me</a>
  </div>
  <div class="about-right">
    <!-- Decorative — no content needed here -->
  </div>
</section>
