const mydiv=document.querySelector('.card-body'); 
const mybutton=document.querySelector('#texttext');



// mybutton.addEventListener('click', () => { 
//   var rannumber1=Math.floor(Math.random() * 256 ); 
//   var rannumber2=Math.floor(Math.random() * 256 ); 
//   var rannumber3=Math.floor(Math.random() * 256 ); 
//   var ranrgb="rgb("+rannumber1+","+rannumber2+","+rannumber3+")";
//   mydiv.style.backgroundColor=ranrgb; }); 
function selectColor(colorNum, colors){
    if (colors < 1) colors = 1; // defaults to one color - avoid divide by zero
    return "hsl(" + (colorNum * (360 / colors) % 360) + ",100%,50%)";
}

body.style.backgroundColor='white';

mybutton.addEventListener('click', function(){
    var color = selectColor(Math.floor(Math.random() * 999), 10);
    mydiv.style.backgroundColor=color;})
