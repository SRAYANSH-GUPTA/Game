let mayhem,fire,heading,meteor,swap;
function clash()
{
    meteor = document.querySelector("#meteor");
    mayhem = document.querySelector("#mayhem");
    meteor.style.left = 0 + 'px';
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
    
}
document.addEventListener("DOMContentLoaded",()=>
{
    fire = document.querySelector("#fire");
    heading = document.querySelector("#headingmove")
    setInterval(change,2000);
    
})