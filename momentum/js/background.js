const images = [
    "0.avif",
    "1.jpeg",
    "2.jpeg",
    "3.jpg",
    "4.avif",
    "5.jpg",
];
const chosenImage = images[Math.floor(Math.random() * images.length)];

// JS로 HTML Element를 만들고 넣는 법.
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

const bgDiv = document.createElement("div");
bgDiv.classList.add("background");
document.body.appendChild(bgDiv);
// appendChild: body의 제일 마지막에, prepend: body의 제일 첫번째에 삽입.
bgDiv.appendChild(bgImage);
// document.body.prepend(bgImage);

function getAvgBrightness(imageElement, callback) {
    imageElement.onload = function () {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const imgWidth = imageElement.naturalWidth;
        const imgHeight = imageElement.naturalHeight;
        // 더 많이 축소해야하는 비율 값을 설정
        const scale = Math.min(800 / imgWidth, 600 / imgHeight);

        // 이미지 크기 조정
        canvas.width = imgWidth * scale;
        canvas.height = imgHeight * scale;

        // 캔버스의 내부좌표 (0,0)에 이미지 그림
        ctx.drawImage(imageElement, 0, 0, canvas.width, canvas.height);
        // 지정한 사각형(시작 x 좌표, 시작 y 좌표, 너비, 높이) 부분의 이미지 데이터를 가져옴
        const ImgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = ImgData.data;
        // 추가적으로 구현해보고 싶은 내용: 시계의 배경 부분 픽셀 값을 통해서 글자 색 변경 코드

        // data = [r,g,b,a(투명도)]
        // 샘플링 방식
        let colorSum = 0;
        /* let step = 10; */
        for (let i = 0; i < data.length; i += 4 /*'*step'*/) {
            colorSum += (data[i] + data[i + 1] + data[i + 2]) / 3; // R, G, B값을 합산 후 평균
        }

        // 픽셀 단위로 계산한 값의 합을 전체 픽셀로 나누어 평균 밝기 계산
        const brightness = colorSum / (canvas.width * canvas.height);
        callback(brightness);
    };
}

const center = document.querySelector(".center");
getAvgBrightness(bgImage, (brightness) => {
    if (brightness > 124) {
        document.body.classList.add("lightBg");
        document.body.classList.remove("darkBg");
    } else {
        document.body.classList.add("darkBg");
        document.body.classList.remove("lightBg");
        // CSS shadow 옵션 변경
        document.documentElement.style.setProperty(
            "--text-color-rgb",
            "0, 0, 0"
        );
    }
});
