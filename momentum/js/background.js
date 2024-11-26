const images = ["0.avif", "1.jpeg", "2.jpeg", "3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// JS로 HTML Element를 만들고 넣는 법.
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
// appendChild: body의 제일 마지막에, prepend: body의 제일 첫번째에 삽입.
document.body.appendChild(bgImage);
// document.body.prepend(bgImage);
