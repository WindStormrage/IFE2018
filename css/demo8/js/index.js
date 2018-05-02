var animation = bodymovin.loadAnimation({
  container: document.getElementById('bm'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: './json/data.json'
})
var animation2 = bodymovin.loadAnimation({
  container: document.getElementById('man'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: './json/data32.json'
})