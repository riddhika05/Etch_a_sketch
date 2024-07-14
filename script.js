let sq ;
let inp;
const container = document.querySelector(".container");
const sqSel = document.querySelector(".squares");
const popup = document.querySelector(".popup");
const overlay = document.querySelector("#overlay");
const input = document.querySelector("#sqinput");
const color=document.querySelector(".color");
function p() {
    popup.classList.add('active');
    color.style.display="none";
    // overlay.classList.add('active');
    input.focus();
    // input.value='';
}
input.addEventListener('keypress',function(event)
{
    if (event.key === 'Enter')
        inp=input.value; 
        console.log(inp);
        sqGen();
})
sqSel.addEventListener('click', p)
function sqGen(){
sq=inp;

console.log(sq);
for (let i = 0; i < sq * sq; i++) {
    const div = document.createElement("div");
    let dim = 960 / sq;
    div.style.backgroundColor = 'white';
    div.style.width = dim + 'px';
    div.style.height = dim + 'px';
    div.style.opacity = '0.4';
    container.appendChild(div);
    popup.style.display="none"
    color.style.display="flex";
    div.addEventListener('mouseover', () => { div.style.backgroundColor = "grey" });
    
}
}
// function initial()
// {
//     for (let i = 0; i < 16*16; i++) {
//         const div = document.createElement("div");
//         let dim = 60;
//         div.style.backgroundColor = 'white';
//         div.style.width = dim + 'px';
//         div.style.height = dim + 'px';
//         div.style.opacity = '0.4';
//         container.appendChild(div);
//         div.addEventListener('mouseover', () => { div.style.backgroundColor = "grey" });
//     }
// }



