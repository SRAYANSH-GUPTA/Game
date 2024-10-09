let mayhem,fire,heading,meteor,rocket1,rocket2;
let pos = 1;
function clash()
{
    rocket1.style.left = pos + 'px';
    rocket2.style.right = pos + 'px';
    pos += 1;
    console.log(pos);
    if(pos>400)
    {
        pos = 0;
        rocket1.style.display = rocket2.style.display = "none";
        change();
    }
    
}
function change()
{
    if(fire.style.display === "none")
    {
        heading.style.display = "none";
        fire.style.display = "block";
    }
    else{
        heading.style.display = "block";
        fire.style.display = "none";
    }
    rocket1.style.display = rocket2.style.display = "block";
    
}
document.addEventListener("DOMContentLoaded",()=>
{
    fire = document.querySelector("#fire");
    heading = document.querySelector("#headingmove")
    rocket1 = document.querySelector("#spcl");
    rocket2 = document.querySelector("#spcr");
    setInterval(clash,20);
    
})