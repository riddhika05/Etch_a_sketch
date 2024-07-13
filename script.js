let no=prompt("squares","0")
let sq=parseInt(no);
const container=document.querySelector(".container");

for(let i=0;i<sq*sq;i++)
{
    const div=document.createElement("div");
    let dim=960/sq;
    div.style.backgroundColor = 'white';
    div.style.width = dim+'px';
    div.style.height =dim+'px';
    div.style.opacity='0.4';
    container.appendChild(div);
    div.addEventListener('click',()=>{div.style.backgroundColor="red";});
    div.addEventListener('mouseover',()=>{div.style.backgroundColor="grey";});
    div.addEventListener('mouseout',()=>{div.style.backgroundColor="white";});

}

