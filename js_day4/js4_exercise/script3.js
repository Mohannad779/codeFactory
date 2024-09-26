const santaGrid = document.getElementById('santa-grid');
const santas = santaGrid.children;

santaGrid.addEventListener('click', (event) => {
  if (event.target.tagName === 'IMG') {
    event.target.style.display = 'none';
  }
});