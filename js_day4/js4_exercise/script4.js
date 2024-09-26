function randomBackgroundColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
  
    const rgbColor = `rgb(${red}, ${green}, ${blue})`;
  
    const body = document.body;
  
    body.style.backgroundColor = rgbColor;
  }
  
  const button = document.getElementById('myButton');
  button.addEventListener('click', randomBackgroundColor);