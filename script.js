document.addEventListener("DOMContentLoaded", function(){

const pages=document.querySelectorAll(".page");
const nextBtns=document.querySelectorAll(".next-btn");
const yesBtn=document.getElementById("yesBtn");
const noBtn=document.getElementById("noBtn");
const hugMessage=document.getElementById("hugMessage");
const flowers=document.querySelector(".flowers");

let current=0;

/* Next Page */
nextBtns.forEach(btn=>{
btn.addEventListener("click",()=>{
pages[current].classList.remove("active");
current++;
pages[current].classList.add("active");
});
});

/* Floating flowers */
for(let i=0;i<25;i++){
let flower=document.createElement("span");
flower.innerHTML="🌸";
flower.style.left=Math.random()*100+"vw";
flower.style.animationDuration=(6+Math.random()*6)+"s";
flowers.appendChild(flower);
}

/* Hug Accept */
yesBtn.addEventListener("click",()=>{
hugMessage.innerText="Sending you 1000 hugs… 🤗💞";

for(let i=0;i<60;i++){
let hug=document.createElement("div");
hug.className="hug";
hug.innerHTML="🤗";
hug.style.left=Math.random()*window.innerWidth+"px";
document.body.appendChild(hug);
setTimeout(()=>hug.remove(),3000);
}

/* Confetti Explosion */
for(let i=0;i<120;i++){
let confetti=document.createElement("div");
confetti.className="confetti";
confetti.style.left=Math.random()*window.innerWidth+"px";
confetti.style.backgroundColor=
`hsl(${Math.random()*360},100%,50%)`;
document.body.appendChild(confetti);
setTimeout(()=>confetti.remove(),3000);
}

});

/* Running Button */
function moveButton(){
const maxX=window.innerWidth-noBtn.offsetWidth;
const maxY=window.innerHeight-noBtn.offsetHeight;
noBtn.style.position="absolute";
noBtn.style.left=Math.random()*maxX+"px";
noBtn.style.top=Math.random()*maxY+"px";
}

noBtn.addEventListener("mouseover",moveButton);
noBtn.addEventListener("touchstart",moveButton);

});
