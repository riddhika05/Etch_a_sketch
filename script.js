const container=document.querySelector(".container");
for(let i=0;i<16;i++)
{
    const div=document.createElement("div");
    div.style.backgroundColor = 'white';
    div.style.width = '200px';
    div.style.height = '200px';
    div.style.opacity='0.4';
    container.appendChild(div);
}