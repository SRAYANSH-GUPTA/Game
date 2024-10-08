let input = []; 
let h, speeddir, ipos, fpos,letter; 
let letters = [];
let classname = 0;
function generate()
{
    let ascii = 33 + Math.floor(Math.random()*40);
    input.push(String.fromCharCode(ascii));
    console.log(ascii);
    letter = document.createElement("div");
    letter.innerHTML = input[input.length-1];
    letter.className = 'letter' + `${classname}`;
    classname++;
    console.log(letter);   
    let y = Math.floor(Math.random()*(window.innerWidth-letter.style.width));
    console.log(window.innerWidth);
    letter.style.top = ipos + 'px';
    letter.style.left  = y + "px";
    area.appendChild(letter);
    letters.push({symbol : letter, position : ipos, speeddir : 1,cpos : letter.className});
    
};
function move()
{

   for(let i =0;i < letters.length; i++)
   {
    currentletter = letters[i];
    currentletter.position += currentletter.speeddir;
    speeddir = currentletter.speeddir;
    currentletter.symbol.style.top = currentletter.position + "px";
    if(currentletter.position + currentletter.symbol.offsetHeight >= fpos || currentletter.position <= ipos)
        {
            speeddir = speeddir * -1.2;   
        }
        else if(Math.abs(speeddir) > 5)
        {
            speeddir /= 1.2;
        }
        currentletter.speeddir = speeddir;
   }
        
}

document.addEventListener('keydown', (event) => {
    const button = event.key;
    console.log(button)
    const matched = letters.find(letterObj => letterObj.symbol.textContent === button);
    if (matched) {
        matched.symbol.remove();
        letters = letters.filter(letterObj => letterObj !== matched);
    }
});
     
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
    setInterval(move,100);
    
    

});