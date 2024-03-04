
let slider = 1;
const radio1 = document.querySelector("#slide1").checked = true;

setInterval(() => {
    nextImg()
}, 3000);

function nextImg() {
    slider++
    if (slider>3)  {
        slider = 1
    }
    document.querySelector("#slide"+slider).checked = true;
}