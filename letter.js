let input = []; 
let h, speeddir, ipos, fpos,letter; 
function generate()
{
    let ascii = 21 + Math.floor(Math.random()*40);
    input.push(String.fromCharCode(ascii));
    letter = document.createElement("div");
    letter.innerHTML = input[input.length-1];
    console.log(letter);   
    let y = Math.floor(Math.random()*window.innerWidth);
    letter.style.left  = y + "px";
    area.appendChild(letter);
    setInterval(move,100);
};
function move()
{

    h += speeddir;       
    letter.style.top = h + 'px';
        if(h + letter.offsetHeight >= fpos || h <= ipos)
        {
            speeddir = speeddir * -1.2;   
        }
        else if(Math.abs(speeddir) > 8)
        {
            speeddir /= 1.2;
        }
}
     
document.addEventListener("DOMContentLoaded",()=>
{
    let area = document.querySelector("area");
    input = [];
    ipos = 100;
    h = ipos;   
    fpos = window.innerHeight-100;
    speeddir = 1; 
    console.log(input);
    setInterval(generate,1000);
    

});