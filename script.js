<script>
// ---- Editable data (start) ----
const LINKS = {
  email: "mailto:hello@example.com",
  instagram: "https://instagram.com/loopsbylois",
  shop: "#" // your Etsy link later
};

// Add real image paths in /assets
const PROJECTS = [
  {
    title: "Sunny Bucket Hat",
    image: "assets/sunny-hat.jpg",
    alt: "Yellow crochet bucket hat on a white background",
    desc: "My first wearable! Single crochet with cotton yarn. I had to redo the brim twice so it wouldn’t flop.",
    tags: ["wearables", "cotton"],
    date: "2025-07-10",
    size: "Teen",
    pattern: "Original",
  },
  {
    title: "Blueberry Whale",
    image: "assets/whale-blue.jpg",
    alt: "Small blue amigurumi whale with a tiny smile",
    desc: "I learned magic ring and safety eyes. The tail was the trickiest bit.",
    tags: ["toys", "amigurumi"],
    date: "2025-08-01",
    size: "Palm size",
    pattern: "Based on free whale pattern",
  },
  {
    title: "Cozy Mug Sleeve",
    image: "assets/mug-sleeve.jpg",
    alt: "Neutral crochet sleeve around a mug",
    desc: "Half-double crochet with ribbing. Keeps fingers from burning!",
    tags: ["home", "gifts"],
    date: "2025-06-21",
    size: "Standard mug",
    pattern: "Original",
  },
];

const JOURNAL = [
  { title: "Learning the magic ring", date: "2025-07-05", content: "I finally got the magic ring to work after three tutorials. Tip: use a slightly grippy yarn while practicing." },
  { title: "Choosing colours", date: "2025-08-10", content: "I put yarn balls next to each other in daylight, not room light. It helps avoid muddy combinations." }
];
// ---- Editable data (end) ----

// Wire up links & year
const emailLink = document.getElementById('emailLink');
const instaLink = document.getElementById('instaLink');
const shopLink = document.getElementById('shopLink');
const shopLink2 = document.getElementById('shopLink2');
const year = document.getElementById('year');

if (emailLink) emailLink.href = LINKS.email;
if (instaLink) instaLink.href = LINKS.instagram;
if (shopLink) shopLink.href = LINKS.shop;
if (shopLink2) shopLink2.href = LINKS.shop;
if (year) year.textContent = new Date().getFullYear();

// Helpers
function placeholderSVG(text){
  return `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'>
      <rect width='100%' height='100%' fill='%23f1f1f3'/>
      <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle'
            font-family='system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif'
            font-size='56' fill='%23888'>${text}</text>
    </svg>`
  )}`;
}

function openLightbox(p){
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  const img = document.getElementById('lbImg');
  const title = document.getElementById('lbTitle');
  const desc = document.getElementById('lbDesc');
  const meta = document.getElementById('lbMeta');

  img.src = p.image || placeholderSVG(p.title);
  img.alt = p.alt || p.title;
  title.textContent = p.title;
  const bits = [
    p.pattern ? `Pattern: ${p.pattern}` : null,
    p.size ? `Size: ${p.size}` : null,
    p.date ? `Made: ${new Date(p.date).toLocaleDateString()}` : null,
    (p.tags && p.tags.length) ? `Tags: ${p.tags.join(', ')}` : null
  ].filter(Boolean).join(' • ');
  meta.textContent = bits;
  desc.textContent = p.desc || '';
  lb.showModal();
}

(function initLightbox(){
  const closeBtn = document.querySelector('#lightbox .close');
  if (closeBtn) closeBtn.addEventListener('click', ()=> document.getElementById('lightbox').close());
})();

function renderProjects(list){
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;
  grid.innerHTML = '';
  const tpl = document.getElementById('tileTemplate');

  list.forEach(p=>{
    const node = tpl.content.cloneNode(true);
    const img = node.querySelector('img');
    img.src = p.image || placeholderSVG(p.title);
    img.alt = p.alt || p.title;
    img.decoding = 'async';
    node.querySelector('.title').textContent = p.title;
    const tags = node.querySelector('.tags');
    (p.tags||[]).forEach(t=>{
      const s = document.createElement('span');
      s.className='tag';
      s.textContent = t;
      tags.appendChild(s);
    });
    node.querySelector('article').addEventListener('click', ()=> openLightbox(p));
    grid.appendChild(node);
  });
}

function setFilter(key){
  const buttons = Array.from(document.querySelectorAll('.filter'));
  buttons.forEach(b=> b.setAttribute('aria-pressed', String(b.dataset.filter===key)));
  if (key==='all') return renderProjects(PROJECTS);
  renderProjects(PROJECTS.filter(p=> (p.tags||[]).includes(key)));
}

(function initFilters(){
  const buttons = Array.from(document.querySelectorAll('.filter'));
  buttons.forEach(b=> b.addEventListener('click', ()=> setFilter(b.dataset.filter)));
})();

function renderJournal(){
  const list = document.getElementById('journalList');
  if (!list) return;
  list.innerHTML = '';
  const tpl = document.getElementById('entryTemplate');
  JOURNAL.forEach(e=>{
    const node = tpl.content.cloneNode(true);
    node.querySelector('h3').textContent = e.title;
    node.querySelector('time').textContent = new Date(e.date).toLocaleDateString();
    node.querySelector('.content').textContent = e.content;
    list.appendChild(node);
  });
}

// Init
renderProjects(PROJECTS);
renderJournal();
</script>
