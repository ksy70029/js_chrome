const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img");

// bgImage.src = `img/${chosenImage}`;

// document.body.appendChild(bgImage);

const bgImage = document.createElement("div");

bgImage.style.backgroundImage = `url(img/${chosenImage})`;

bgImage.classList.add("bg_img");

document.body.appendChild(bgImage);


