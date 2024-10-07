function change()
{
    let i = document.querySelector("#keys");
let n = 1;
    while (1)
        {
            n = Math.floor(Math.random()*3)
            i.src = `${n}.jpg`
            console.log(n);
        }
}
Document.addEventListener('DOMContentLoaded',()=>
{
    setInterval(change,5000);
    console.log("now");
});