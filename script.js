const colorPallet = document.querySelector('#color-palette');

const guide = ['#000000', '#808080', '#6A5ACD', '#000080', '#00BFFF',
               '#008080', '#006400', '#8B4513', '#D2691E', '#4B0082',
               '#8B008B', '#FF0000', '#FF4500', '#FFFF00', '#B0E0E6'];


const generateRandomNumber = (number) => Math.floor(Math.random() * (number));

const generateColorGuide = (amountOfColor) => {
  const arrayOfColor = ['#000000'];
  
  while (arrayOfColor.length < amountOfColor) {
    const randomNumber = generateRandomNumber(guide.length);

    if (!arrayOfColor.includes(guide[randomNumber])) {
      arrayOfColor.push(guide[randomNumber]);
    }
  }

  return arrayOfColor;
};

const createColorPalette = () => {
  const colorGuide = generateColorGuide(4);

  for (let index = 0; index < colorGuide.length; index += 1) {
    const divColor = document.createElement('div');
    divColor.className = 'color';
    divColor.style.backgroundColor = colorGuide[index];
    colorPallet.appendChild(divColor);
  }

  const buttonRefresh = document.createElement('button');
  buttonRefresh.className = 'refresh-colors';
  buttonRefresh.id = 'button-random-color';
  buttonRefresh.textContent = 'Cores aleatórias';
  colorPallet.appendChild(buttonRefresh);
};

const refreshColorPalette = () => {
  const buttonRefresh = document.querySelector('#button-random-color');
  buttonRefresh.addEventListener('click', () => {
    const divColors = document.querySelectorAll('#color-palette .color')
    const colorGuide = generateColorGuide(divColors.length);

    for (let index = 0; index < divColors.length; index += 1) {
      divColors[index].style.backgroundColor = colorGuide[index];
    }
  })
}

createColorPalette();
refreshColorPalette();
