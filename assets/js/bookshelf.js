function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomChoice(array) {
return array[Math.floor(Math.random() * array.length)];
}

let spines = Object.values(document.getElementsByClassName("spine"));
let covers = Object.values(document.getElementsByClassName("cover"));
let tops = Object.values(document.getElementsByClassName("top"));

let availablePatterns = [
  "--spine-pyramid",
  "--spine-stairs",
  "--spine-argyle",
  "--spine-tartan"
];

let availableColors = [
  //"maroon",
  //"darkgreen",
  //"firebrick",
  //"purple",
  //"palevioletred",
  //"orangered",
  //"sienna",
  //"darkkhaki",
  //"brown",
  //"midnightblue"
  "#696969", // (Dim Gray)
  "#000000", // (Black)
  "#8B0000", // (Dark Red)
  "#D2691E", // (Chocolate)
  "#8B4513", // (Saddle Brown)
  "#556B2F", // (Dark Olive Green)
  "#44AAFF", // (Teal)
  "#5F9EA0", // (Cadet Blue)
  "#2F4F4F", // (Dark Slate Gray)
  "#0000FF", // (Navy)
  "#4B0082", // (Indigo)
  "#8B008B", // (Dark Magenta)

];

// assign a random height, pattern and colour to each book
spines.map(function (s, i) {
  let randomHeight = getRandomInt(260, 290);
  s.style.height = `${randomHeight}px`;
  s.style.top = `${280 - randomHeight}px`;

  let date = s.dataset.customParam;
  let year = parseInt(date.substr(0,4));
  let month = parseInt(date.substr(5,2));
  let randomPattern = availablePatterns[ year % availablePatterns.length ];
  s.style.backgroundImage = `var(${randomPattern})`;

  let randomColor = availableColors[ month % availableColors.length ] ;
  s.style.backgroundColor = randomColor;

  covers[i].style.height = `${randomHeight}px`;
  covers[i].style.top = `${280 - randomHeight}px`;

  tops[i].style.top = `${280 - randomHeight}px`;
});
