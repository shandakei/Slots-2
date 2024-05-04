console.log('s2s2s2s2s2s2');

const machineAll = document.querySelector(".machine")
const screenDiv = document.querySelector(".screen")
const controlsDiv = document.querySelector(".controls")
const btnOne = document.querySelector(".btn-one")
const slot1 = document.querySelector(".slot1")
// const aaaaa = document.querySelector(".aaaa")
// const aaaaa = document.querySelector(".aaaa")
// const aaaaa = document.querySelector(".aaaa")
const imgBlank = document.querySelector('.img-blank')
const imgSrc = document.querySelector('.img-src')


btnOne.addEventListener('click', rollImg)


const images = [
    { class: "hat-img", src: "media/hat.png" },
    { class: "4-img", src: "media/4.png" },
    { class: "clouds-img", src: "media/clouds.png" },
    { class: "coin-img", src: "media/coin.png" },
    { class: "dragon-img", src: "media/dragon.png" },
    { class: "general-img", src: "media/general.png" },
    { class: "lady-img", src: "media/lady.png" },
    { class: "panda-img", src: "media/panda.png" },
    { class: "yinyang-img", src: "media/yinyang.png" }
];


function rollImg() {
    console.log('rolled image');

    for (let img of images) {
        imgBlank.innerHTML.src = img
        setInterval(imgSrc.style.display = 'initial', 500);
        setInterval(imgSrc.style.display = 'hidden', 500)
    }

    setInterval(randomCount(imgSrc), 8000) {
        imgSrc.style.display = 'initial'
    }
    

    console.log('image selected');

}

function randomCount() {
    let count = Math.floor(Math.random() * 31 + 10)
    return count    
}