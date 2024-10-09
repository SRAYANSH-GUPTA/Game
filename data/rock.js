let input = []; 
let h, speeddir, ipos, fpos,rock,updatescore,maxscore,player,missileq,playerX,playerY,audio,goaudio,vicAudio; 
let rocks = [];
let classname = 0;
let score = 0;
let moveid = null;
let generateid = null;
let missileid = null;
let missilenum = 0;
function missile()
{
    if(missilenum > 8){missilenum = 0;}
    missileq.src = `rockimg/${missilenum++}.png`;
}
function missilemove()
{
    let mposx = 0;
    let mposy = 0;

}
function gamewin()
{
    clearInterval(moveid);
    clearInterval(generateid);
    audio.pause();
    vicAudio.play();
    window.alert("Winner");
    window.location.href = "game.html"
    updatescore.innerHTML = "Win!!";
}
function generate()
{
    let imgn = Math.floor(Math.random()*8);
    input.push(`${imgn}.png`);
    console.log(imgn);
    rock = document.createElement("img");
    rock.src = `rockimg/${imgn}.png`
    rock.className = 'rock';
    rock.style.width = `${60}px`;
    rock.style.height = `${60}px`;

    console.log(rock);   
    let y = Math.floor(Math.random()*(window.innerWidth-2 * parseInt(rock.style.width)));
    rock.style.top = ipos + 'px';
    rock.style.left  = y + "px";
    area.appendChild(rock);
    rocks.push({symbol : rock, position : ipos, speeddir : 5});
    audio.play();
    
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
   
    checkCollision();
        
}
function checkCollision() {
    const playerRect = player.getBoundingClientRect();

    for (let i = 0; i < rocks.length; i++) {
        const rockRect = rocks[i].symbol.getBoundingClientRect();

    
        if (
            playerRect.left  < rockRect.right &&
            playerRect.right  > rockRect.left &&
            playerRect.top < rockRect.bottom &&
            playerRect.bottom > rockRect.top
        ) {
            player.src = "images/fire.png";
            player.style.height = 240 + 'px';
            player.style.width = 200 + 'px';
            gameOver(); 
            break;
        }
    }
}
function killRocks() {
    const playerRect = player.getBoundingClientRect();
    const breakArea = {
        left: playerRect.left,
        right: playerRect.right,
        top: playerRect.top ,
        bottom: playerRect.bottom ,
    };

    for (let i = rocks.length - 1; i >= 0; i--) {
        const rockRect = rocks[i].symbol.getBoundingClientRect();

    
        if (
            rockRect.left + 30 < breakArea.right &&
            rockRect.right + 30> breakArea.left &&
            rockRect.top + 30 < breakArea.bottom &&
            rockRect.bottom + 30 > breakArea.top
        ) {
    
            area.removeChild(rocks[i].symbol);
            rocks.splice(i, 1); 
        }
    }
}
function bomb()
{

}
function gameOver() {
    clearInterval(moveid);
    clearInterval(generateid);
    updatescore.innerHTML = "Game Over!";
    audio.pause();
    goaudio.play();
    window.alert("Game Over");
    window.location.href = "game.html";
}
document.addEventListener('keydown', (event) => {
    const button = event.key;
    playerX = parseInt(player.style.left) || 0;
     playerY = parseInt(player.style.top) || 400;
     let step = 10;
     
     switch(button)
     {
        case ' ':
            killRocks();
            break;
        case 'ArrowUp':
            if(playerY -step > ipos)
                {playerY -= step;} 
            break;
        case 'ArrowDown':
            if(playerY + step < fpos){playerY += step;} 
            break;
        case 'ArrowLeft':
            if(playerX - step > 0){playerX -= step;} 
            break;
        case 'ArrowRight':
            if(playerX + step + player.width< window.innerWidth){playerX += step;}   
            break;
        
        }
        player.style.left = playerX + 'px';
        player.style.top = playerY + 'px';
        if(playerX > window.innerWidth - player.offsetHeight)
            {
             gamewin();   
            }
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
    missileq = document.querySelector("#missile");
    input = [];
    ipos = 100;
    h = ipos;   
    playerX = parseInt(player.style.left) || 0;
    playerY = parseInt(player.style.top) || 400;
    audio = document.querySelector("#audio");
    goaudio = document.querySelector("#overaudio");
    player.style.left = playerX + 'px';
    player.style.top = playerY + 'px';
    fpos = window.innerHeight-100;
    speeddir = 1; 
    vicAudio = document.querySelector("#victory")
    if(!localStorage.getItem('maxscore'))
        {
            localStorage.setItem('maxscore',0);
        }
    let maxscore = localStorage.getItem('score');
    console.log(input);
    audio.play();
    generateid = setInterval(generate,500);
    moveid = setInterval(move,50);
    missileid = setInterval(missile,100);

    
    

});