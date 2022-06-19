const images = [
"bluepaint.jpg", "otter.jpg", "road.jpg", "sea.jpg"
];

const chooseImage = images[Math.floor(Math.random() * images.length)]



document.body.style.backgroundImage = `url("img/${chooseImage}")`;

