let count=0;
const countDis= document.querySelector(".countDisplay")
const incre=document.querySelector(".inc")
const decre=document.querySelector(".dec")
const resetbtn=document.querySelector(".reset")
incre.addEventListener('click', ()=>{
    count++;
    countDis.innerHTML=count;
})
incre.addEventListener('keyup', (event)=>{
    if(event.key=="ArrowUp")
    {count++;
    countDis.innerHTML=count;}
})

decre.addEventListener('click', ()=>{
    count--;
    if(count<0) count=0
    countDis.innerHTML=count;
})
decre.addEventListener('keydown', (event)=>{
    if(event.key=="ArrowDown")
    {count--;
    if(count<0) count=0
    countDis.innerHTML=count;}
})
resetbtn.addEventListener('click', ()=>{
    count=0;
    countDis.innerHTML=count;
})
