let sq=16;
function p(){
let no=prompt("squares","16")
 sq=parseInt(no);
}
const container=document.querySelector(".container");
const sqSel=document.querySelector(".squares");
sqSel.addEventListener('click',p)
for(let i=0;i<sq*sq;i++)
{
    const div=document.createElement("div");
    let dim=960/sq;
    div.style.backgroundColor = 'white';
    div.style.width = dim+'px';
    div.style.height =dim+'px';
    div.style.opacity='0.4';
    container.appendChild(div);    
    div.addEventListener('mouseover',()=>{ div.style.backgroundColor="grey"});
}



