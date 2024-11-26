const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    // padStart(num,String): num의 자릿수에 맞게 앞쪽에 String을 채움.
    // padEnd(num,String): num의 자릿수에 맞게 뒷쪽에 String을 채움.
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;

    // function을 활용해서 하는 법
    // clock.innerText = new Date().toLocaleTimeString("en-US",{hour12:false});
}

getClock();
// setInterval(function, ms) ms마다 function 실행
setInterval(getClock, 1000);

// setTimeout(function, ms) ms 후 function 실행
