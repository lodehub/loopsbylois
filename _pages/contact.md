---
layout: default
title: Contact
permalink: /contact/
---

<div class="contact-wrap">
  <p class="page-eyebrow">Get in touch</p>
  <!-- PLACEHOLDER: Personalise the heading if you like -->
  <h1 class="page-title" style="font-size:2.2rem;margin-bottom:0.8rem;">Say <em>hello</em></h1>
  <!-- PLACEHOLDER: Replace with your own message -->
  <p>[Whether you have a question, a collaboration idea, or just want to say hi — I'd love to hear from you.]</p>

  <!-- PLACEHOLDER: Set up a free form service like Formspree (formspree.io) and replace YOUR_FORM_ID below -->
  <form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <label for="name">Your name</label>
    <input type="text" id="name" name="name" placeholder="Lois Knit" required>

    <label for="email">Your email</label>
    <input type="email" id="email" name="email" placeholder="hello@example.com" required>

    <label for="message">Message</label>
    <textarea id="message" name="message" placeholder="What's on your mind?" required></textarea>

    <button type="submit" class="btn" style="animation:none;">Send message →</button>
  </form>
</div>
