const colorPallet = document.querySelector('#color-palette');
const pixelBoard = document.querySelector('#pixel-board');
const divColorsPaletteSelector = '#color-palette .color';

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

const savePaletteLocalStorage = () => {
  const colorsToSave = document.querySelectorAll(divColorsPaletteSelector);
  const colorGuide = [];
  for (let index = 0; index < colorsToSave.length; index += 1) {
    colorGuide.push(colorsToSave[index].style.backgroundColor);
  }
  localStorage.setItem('colorPalette', JSON.stringify(colorGuide));
};

const recoveryLocalStore = () => {
  const colorGuideLocalStorage = localStorage.getItem('colorPalette');
  if (colorGuideLocalStorage) {
    return JSON.parse(colorGuideLocalStorage);
  }

  return generateColorGuide(4);
};

const applyColorPalette = (arrayColor) => {
  const divColors = document.querySelectorAll(divColorsPaletteSelector);
  for (let index = 0; index < arrayColor.length; index += 1) {
    divColors[index].style.backgroundColor = arrayColor[index];
  }
};

const createColorPalette = () => {
  const colorGuide = recoveryLocalStore();

  for (let index = 0; index < colorGuide.length; index += 1) {
    const divColor = document.createElement('div');
    divColor.className = 'color';
    colorPallet.appendChild(divColor);
  }

  applyColorPalette(colorGuide);
  const buttonRefresh = document.createElement('button');
  buttonRefresh.className = 'refresh-colors';
  buttonRefresh.id = 'button-random-color';
  buttonRefresh.textContent = 'Cores aleatórias';
  colorPallet.appendChild(buttonRefresh);
};

const createPixelBoard = () => {
  for (let indexPixel = 0; indexPixel < 5; indexPixel += 1) {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('rowDiv');
    for (let indexRow = 0; indexRow < 5; indexRow += 1) {
      const pixelDiv = document.createElement('div');
      pixelDiv.classList.add('pixel');
      rowDiv.appendChild(pixelDiv);
    }

    pixelBoard.appendChild(rowDiv);
  }
};

const refreshColorPalette = () => {
  const buttonRefresh = document.querySelector('#button-random-color');
  buttonRefresh.addEventListener('click', () => {
    const divColors = document.querySelectorAll(divColorsPaletteSelector);
    const colorGuide = generateColorGuide(divColors.length);
    applyColorPalette(colorGuide);
    savePaletteLocalStorage();
  });
};

createColorPalette();
createPixelBoard();
refreshColorPalette();
