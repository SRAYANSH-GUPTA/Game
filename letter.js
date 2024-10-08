let input = []; 
let h, speeddir, ipos, fpos,letter,updatescore; 
let letters = [];
let classname = 0;
let score = 0;
let moveid = null;
let generateid = null;

function loose()
{
    updatescore.innerHTML = "Lost";
};
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
    let y = Math.floor(Math.random()*(window.innerWidth-2 * letter.style.width));
    letter.style.top = ipos + 'px';
    letter.style.left  = y + "px";
    area.appendChild(letter);
    letters.push({symbol : letter, position : ipos, speeddir : 2,cpos : letter.className});
    
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
   if(letters.length > 30)
    {
        clearInterval(generateid);
        clearInterval(moveid);
        loose();
    }
        
}

document.addEventListener('keydown', (event) => {
    const button = event.key;
    console.log(button)
    const matched = letters.find(letterObj => letterObj.symbol.textContent === button);
    if (matched) {
        matched.symbol.remove();
        letters = letters.filter(letterObj => letterObj !== matched);
        score +=1;
        console.log(`score = ${score}`);
        updatescore.innerHTML = `${score}`;
    }
    
});
     
document.addEventListener("DOMContentLoaded",()=>
{
    let area = document.querySelector("area");
    updatescore = document.querySelector("#score");
    input = [];
    ipos = 100;
    h = ipos;   
    fpos = window.innerHeight-100;
    speeddir = 1; 
    console.log(input);
    generateid = setInterval(generate,1500);
    moveid = setInterval(move,100);
    
    

});