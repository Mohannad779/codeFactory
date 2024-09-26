const circle = document.getElementById('circle');
const message = document.getElementById('message');

circle.addEventListener('mouseover', () => {
  message.textContent = 'You are in the circle';
});

circle.addEventListener('mouseout', () => {
  message.textContent = 'You are outside of the circle';
});

circle.addEventListener('click', () => {
  document.body.style.backgroundColor = 'gray';
});

circle.addEventListener('dblclick', () => {
  document.body.style.backgroundColor = 'blue';
});