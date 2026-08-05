/* Shared site behaviour — loaded by every page. */

function toggleMenu(btn) {
  var m = document.querySelector('.menu');
  if (!m) return;
  var open = m.classList.toggle('show');
  if (btn) btn.setAttribute('aria-expanded', open);
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.menu a').forEach(function (a) {
    a.addEventListener('click', function () {
      var m = document.querySelector('.menu');
      if (m) m.classList.remove('show');
    });
  });

  var y = document.getElementById('y');
  if (y) y.textContent = new Date().getFullYear();

  var d = document.getElementById('d');
  if (d) d.textContent = new Date().toLocaleDateString('en-IN');
});

/* Contact form → WhatsApp. No backend needed, so it works on GitHub Pages. */
function sendToWhatsApp(e) {
  e.preventDefault();
  var get = function (id) {
    var el = document.getElementById(id);
    return el ? el.value.trim() : '';
  };
  var lines = ['Hello Uphar Lifestyle,'];
  if (get('name')) lines.push('Name: ' + get('name'));
  if (get('phone')) lines.push('Phone: ' + get('phone'));
  if (get('need')) lines.push('Looking for: ' + get('need'));
  if (get('date')) lines.push('Function date: ' + get('date'));
  if (get('message')) lines.push('Details: ' + get('message'));
  window.open(
    'https://wa.me/918853160128?text=' + encodeURIComponent(lines.join('\n')),
    '_blank',
    'noopener'
  );
  return false;
}
