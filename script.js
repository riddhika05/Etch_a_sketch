let sq ;
let inp;
const container = document.querySelector(".container");
const sqSel = document.querySelector(".squares");
const popup = document.querySelector(".popup");
const input = document.querySelector("#sqinput");
const color=document.querySelector(".color");
const colorChoice=document.querySelector(".colorChoice");
const reset=document.querySelector(".reset");
const eraser=document.querySelector(".eraser");
const Rainbow=document.querySelector(".Rainbow");
function p() {
    popup.classList.add('active');
    color.style.display="none";
  reset.style.display="none";
  eraser.style.display="none";
  Rainbow.style.display="none";
    input.focus();
   
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
    reset.style.display="block";
    eraser.style.display="block";
    Rainbow.style.display="block";
    color.addEventListener('click',()=>{ colorChoice.classList.add('active')
        div.addEventListener('mouseover', () => { div.style.backgroundColor =colorPick() });
    });
    // div.addEventListener('mouseover', () => { div.style.backgroundColor =colorPick() }); 
    reset.addEventListener('click', () => { div.style.backgroundColor ="white"; 
    colorChoice.classList.remove('active')})
    eraser.addEventListener('click', ()=> div.addEventListener('mouseover', () => { div.style.backgroundColor ="white";
        colorChoice.classList.remove('active')        
    }))
    sqSel.addEventListener('click', ()=>{location.reload();})
    Rainbow.addEventListener('click',()=>{ const randomColor = Math.floor(Math.random()*16777215).toString(16);
        div.addEventListener('mouseover', () => { div.style.backgroundColor ="#"+randomColor;
    })})


    
    }
 
}

function colorPick()
{
//    color.addEventListener('click',()=>{ colorChoice.classList.add('active')});
    let Color=colorChoice.value;
    return Color;
    
  
}




