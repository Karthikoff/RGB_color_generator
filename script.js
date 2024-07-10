const redslider = document.getElementById("redslider");
const greenslider = document.getElementById("greenslider");
const blueslider = document.getElementById("blueslider");

const redvaluespan = document.getElementById("redvalue");
const greenvaluespan = document.getElementById("greenvalue");
const bluevaluespan = document.getElementById("bluevalue");

const colorbox = document.getElementById("color-box");
const copybutton = document.getElementById("copybutton");
const inputtypeRGBvalue = document.getElementById("inputtype");

redslider.addEventListener('input',updateColor);
greenslider.addEventListener('input',updateColor);
blueslider.addEventListener('input',updateColor);
copybutton.addEventListener('click',copyRGBvalue)


function updateColor(){
        
    const redvalue = redslider.value;
    const greenvalue = greenslider.value;
    const bluevalue = blueslider.value;

    //console.log(redvalue,greenvalue,bluevalue);

    const rgbcolor = `rgb(${redvalue}, ${greenvalue}, ${bluevalue})`;
    // console.log(rgbcolor);

    colorbox.style.backgroundColor = rgbcolor;

    redvaluespan.textContent=redvalue;
    greenvaluespan.textContent=greenvalue;
    bluevaluespan.textContent=bluevalue;

    inputtypeRGBvalue.textContent=rgbcolor;

}
updateColor();


function copyRGBvalue(){
       
    const redvalue = redslider.value;
    const greenvalue = greenslider.value;
    const bluevalue = blueslider.value;

    const rgbcolor = `rgb(${redvalue}, ${greenvalue}, ${bluevalue})`;

    navigator.clipboard.writeText(rgbcolor)
     .then(()=>{
        alert("RGB color value copied:" +rgbcolor);
     })
     .catch((error)=>{
        console.error("failed to copy",error);
     });
     }
