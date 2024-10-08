let input = []; 
let h, speeddir, ipos, fpos,rock,updatescore,maxscore,player; 
let rocks = [];
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
    let imgn = Math.floor(Math.random()*3);
    input.push(`${imgn}.png`);
    console.log(imgn);
    rock = document.createElement("img");
    rock.src = `${imgn}.png`
    rock.className = 'rock';
    rock.style.width = `${60}px`;
    rock.style.height = `${60}px`;

    console.log(rock);   
    let y = Math.floor(Math.random()*(window.innerWidth-2 * parseInt(rock.style.width)));
    rock.style.top = ipos + 'px';
    rock.style.left  = y + "px";
    area.appendChild(rock);
    rocks.push({symbol : rock, position : ipos, speeddir : 2});
    
};
function move()
{

   for(let i =0;i < rocks.length; i++)
   {
    currentrock = rocks[i];
    currentrock.position += currentrock.speeddir;
    speeddir = currentrock.speeddir;
    currentrock.symbol.style.top = currentrock.position + "px";
    if(currentrock.position + currentrock.symbol.offsetHeight >= fpos || currentrock.position <= ipos)
        {
            speeddir = speeddir * -1.2;   
        }
        else if(Math.abs(speeddir) > 5)
        {
            speeddir /= 1.2;
        }
        currentrock.speeddir = speeddir;
   }
   if(rocks.length > 80)
    {
        clearInterval(generateid);
        clearInterval(moveid);

    }
    checkCollision();
        
}
function checkCollision() {
    const playerRect = player.getBoundingClientRect();

    for (let i = 0; i < rocks.length; i++) {
        const rockRect = rocks[i].symbol.getBoundingClientRect();

    
        if (
            playerRect.left < rockRect.right &&
            playerRect.right > rockRect.left &&
            playerRect.top < rockRect.bottom &&
            playerRect.bottom > rockRect.top
        ) {
            gameOver(); 
            break;
        }
    }
}


function gameOver() {
    clearInterval(moveid);
    clearInterval(generateid);
    updatescore.innerHTML = "Game Over!";
    
}
document.addEventListener('keydown', (event) => {
    const button = event.key;
    let playerX = parseInt(player.style.left) || 0;
     let playerY = parseInt(player.style.top) || 400;
     let step = 10;
     switch(button)
     {
        case 'ArrowUp':
            playerY -= step; 
            break;
        case 'ArrowDown':
            playerY += step; 
            break;
        case 'ArrowLeft':
            playerX -= step; 
            break;
        case 'ArrowRight':
            playerX += step;   
            break;
        }
        player.style.left = playerX + 'px';
        player.style.top = playerY + 'px';
    console.log(button)
    
    
});
document.addEventListener("mousemove", (event) => {
    const playerRect = player.getBoundingClientRect();
    const playerX = playerRect.left + playerRect.width / 2;
    const playerY = playerRect.top + playerRect.height / 2;

    const angle = Math.atan2(event.clientY - playerY, event.clientX - playerX) * (180 / Math.PI);

    player.style.transform = `rotate(${angle}deg)`;
});

  
document.addEventListener("DOMContentLoaded",()=>
{
    let area = document.querySelector("area");
    updatescore = document.querySelector("#score");
    player = document.querySelector("#player");
    input = [];
    ipos = 100;
    h = ipos;   
    fpos = window.innerHeight-100;
    speeddir = 1; 
    if(!localStorage.getItem('maxscore'))
        {
            localStorage.setItem('maxscore',0);
        }
    let maxscore = localStorage.getItem('score');
    console.log(input);
    generateid = setInterval(generate,600);
    moveid = setInterval(move,100);
    
    

});