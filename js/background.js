const images = [
  "bonobono.png",
  "singapore.jpg",
  "softwave.jpg",
  "tottenham.png",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
