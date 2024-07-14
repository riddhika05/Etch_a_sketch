let sq ;
let inp;
sq=16;
sqGen();
const popup = document.querySelector(".popup");
const overlay = document.querySelector("#overlay");
const input = document.querySelector("#sqinput");

function p() {
    popup.classList.add('active');
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

const container = document.querySelector(".container");
const sqSel = document.querySelector(".squares");
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
    div.addEventListener('mouseover', () => { div.style.backgroundColor = "grey" });
}
}



