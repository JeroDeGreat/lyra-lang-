/* Lyra Website JS */

// Navbar scroll
window.addEventListener('scroll', () => {
  document.getElementById('navbar')?.classList.toggle('scrolled', window.scrollY > 30);
});

// Mobile nav
const toggle = document.getElementById('navToggle');
const links  = document.getElementById('navLinks');
toggle?.addEventListener('click', () => links?.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a =>
  a.addEventListener('click', () => links?.classList.remove('open'))
);

// Install tabs
function showTab(id) {
  document.querySelectorAll('.itab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.itab').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + id)?.classList.add('active');
  document.querySelectorAll('.itab').forEach(b => {
    if (b.getAttribute('onclick')?.includes(id)) b.classList.add('active');
  });
}

// Example tabs
function showEx(id) {
  document.querySelectorAll('.ex-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.extab').forEach(b => b.classList.remove('active'));
  document.getElementById(id)?.classList.add('active');
  document.querySelectorAll('.extab').forEach(b => {
    if (b.getAttribute('onclick')?.includes(id)) b.classList.add('active');
  });
}

// Typewriter hero code
const lines = [
  {t:'note Train an AI classifier.'},
  {t:'use ml.'},
  {t:''},
  {t:'let reviews be an empty list.'},
  {t:'add "brilliant product love it" to reviews.'},
  {t:'add "terrible waste broke fast" to reviews.'},
  {t:'let labels be a list of "good", "bad".'},
  {t:''},
  {t:'let model be trainbayes with reviews, labels.'},
  {t:''},
  {t:'let verdict be predictbayes with model,'},
  {t:'  "absolutely love this amazing product".'},
  {t:'say verdict.'},
];

function colorize(raw) {
  if (!raw.trim()) return '';
  let h = raw.replace(/"([^"]*)"/g, '<span class="str">"$1"</span>');
  h = h.replace(/^(\s*)(let|set|if|else|end|say|return|define|repeat|for|while|use|add|remove)\b/,
                (m,sp,kw) => `${sp}<span class="kw">${kw}</span>`);
  h = h.replace(/\b(is at least|is at most|is greater than|is less than|is not|is)\b/g,
                '<span class="op">$1</span>');
  h = h.replace(/^(\s*)(end\s+\w+)/, (m,sp,e) => `${sp}<span class="end">${e}</span>`);
  h = h.replace(/^(\s*note.*)$/, '<span style="color:#8b949e;font-style:italic">$1</span>');
  return h;
}

function typeHero() {
  const el = document.getElementById('heroCode');
  if (!el) return;
  let li = 0, ci = 0;

  function tick() {
    if (li >= lines.length) {
      setTimeout(() => { el.innerHTML = ''; li = 0; ci = 0; setTimeout(tick, 600); }, 3000);
      return;
    }
    const text = lines[li].t;
    if (ci <= text.length) {
      const rendered = lines.slice(0, li).map(l => colorize(l.t));
      rendered.push(colorize(text.substring(0, ci)) + (ci < text.length ? '<span style="opacity:.7">|</span>' : ''));
      el.innerHTML = rendered.join('\n');
      ci++;
      setTimeout(tick, ci === 0 ? 0 : 30 + Math.random() * 18);
    } else {
      ci = 0; li++;
      setTimeout(tick, 70);
    }
  }
  tick();
}

// Intersection observer fade-in
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.feat-card,.field-card,.doc-card,.dl-card,.ver-card,.level-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity .5s ease, transform .5s ease';
  obs.observe(el);
});

// Active nav on scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let cur = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 100) cur = s.id; });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + cur ? 'var(--accent)' : '';
  });
});

document.addEventListener('DOMContentLoaded', () => setTimeout(typeHero, 400));
