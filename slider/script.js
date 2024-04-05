let nextDom = document.getElementById('next')
let prevDom = document.getElementById('prev')
let carouselDom = document.querySelector('.carrousel')
let listItemDom = document.querySelector('.carrousel .list')
let thumbnailDom = document.querySelector('.carrousel .thumbnail')

nextDom.onclick = function () {
    showslider('next')
}
prevDom.onclick = function () {
    showslider('prev')
}


let timeRunning = 3000
let timeAutonext = 10000
let rumTimeout;
let rumAutoRum  = setTimeout(() => {
    nextDom.click();
}, timeAutonext);

function showslider(type) {
    let itemSlider = document.querySelectorAll('.carrousel .list .item')
    let itemThumbnail = document.querySelectorAll('.carrousel .thumbnail .item')

    if(type === 'next'){
        listItemDom.appendChild(itemSlider[0])
        thumbnailDom.appendChild(itemThumbnail[0])
        carouselDom.classList.add('next')
    }else{
        let positionLastItem = itemSlider.length -1
        listItemDom.prepend(itemSlider[positionLastItem])
        thumbnailDom.prepend(itemThumbnail[positionLastItem])
        carouselDom.classList.add('prev')
    }

    clearTimeout(rumTimeout);
    rumTimeout = setTimeout(()=>{
        carouselDom.classList.remove('next')
        carouselDom.classList.remove('prev')
    },timeRunning)

    clearTimeout(rumAutoRum)
    rumAutoRum = setTimeout(() => {
        nextDom.click();
    }, timeAutonext);
}