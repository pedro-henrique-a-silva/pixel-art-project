const colorPallet = document.querySelector('#color-palette');

const colorGuide = ['black', 'red', 'green', 'yellow'];

const createColorPallet = () => {
  for (let index = 0; index < colorGuide.length; index += 1) {
    const divColor = document.createElement('div');
    divColor.className = 'color';
    divColor.style.backgroundColor = colorGuide[index];
    colorPallet.appendChild(divColor);
  }
};

createColorPallet();
