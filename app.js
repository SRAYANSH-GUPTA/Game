
document.addEventListener('DOMContentLoaded',()=>
{
    let i = document.querySelector("#keys");
    let ipos = 100;
    let h = ipos;   
    let fpos = window.innerWidth-100;
    let speeddir = 1; 
    setInterval(change,1000);
    setInterval(move,10);
    let score = 0;
    function change()
{
  
    let n = 1;
    
            n = Math.floor(Math.random()*3);
            i.src = `data/${n}.jpg`
            console.log(n);
               
        
};
function move()
{

    h += speeddir;       
    i.style.left = h + 'px';
        if(h + i.width >= fpos || h <= ipos)
        {
            speeddir = speeddir * -1.2;   
        }
        else if(Math.abs(speeddir) > 8)
        {
            speeddir /= 1.2;
        }
}
     
});