
document.addEventListener('DOMContentLoaded',()=>
{
    let i = document.querySelector("#keys");
    let h = 0;
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
    i.style.left += h + 'px';
        if(h + window.width > window.innerWidth)
        {
            speeddir = speeddir * -1;   
        }
}
     
});