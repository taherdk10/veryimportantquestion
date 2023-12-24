function movebtn(){
  btn = document.getElementById('noBtn');
  moveButton(btn);
}
function moveButton(btn) {
  x = Math.random() * (window.innerWidth - 100);
  y = Math.random() * (window.innerHeight - 100);
  btn.style.position = 'absolute';
  btn.style.left = `${x}px`;
  btn.style.top = `${y}px`;
  btn.disabled = false;
}