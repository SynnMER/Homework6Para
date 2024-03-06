const slider = document.getElementById("slider");
const bgBlock = document.querySelector(".bgBlock");

document.body.addEventListener('mousemove',e =>{
    bgBlockColor();
});
function bgBlockColor(){
    let sliderValue = slider.value;
    const bgBlockWidthStr = getComputedStyle(bgBlock).width;
    const bgBlockWidth = place(bgBlockWidthStr);

    console.log(bgBlockWidth);

    block1.style.left = (bgBlockWidth - 200) - ((bgBlockWidth - 200)/100)*sliderValue + 20 + 'px';
    block2.style.left =  (bgBlockWidth - 200)/100 * sliderValue + 20  + 'px';

    bgBlock.style.backgroundColor = `rgb(${255*sliderValue/100},${255*sliderValue/100},${255*sliderValue/100}`;
}
function place(element){
    const width = +element.substring(0,element.indexOf('px'));;
    return width;
}