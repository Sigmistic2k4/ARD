let img1=document.getElementById('img1');
let text1=document.getElementById("text");
let img2=document.getElementById('img2');
let img3=document.getElementById("img3");
let img4=document.getElementById("img4");
let img5=document.getElementById("img5");
let navbarcolor=document.getElementById("navbarcolor");
/*
window.addEventListener('scroll',function(){
    let value=this.window.scrollY;
    console.log(value)
img1.style.top=-value*0.2+'px';
img2.style.top=-value*0.5+'px';
text1.style.top=-value*0.05+'px';
img3.style.top=-value*0.4+'px';
img4.style.top=-value*0.7+'px';
img5.style.top=-value*0.5+'px';
});
*/
const nav = document.getElementById('mynav');
window.onscroll = function () { 
     if (document.body.scrollTop >= 0.1|| document.documentElement.scrollTop >= 0.1 )  {
        nav.classList.add("nav-transparent");
        nav.classList.remove("nav-colored");
    } 
    else {
        nav.classList.add("nav-colored");
        nav.classList.remove("nav-transparent");
    }
};
window.addEventListener("load",()=>{
    const loader=document.querySelector(".loader");
    loader.classList.add("loader-hidden");
    loader.addEventListener("transitioned",()=>{
        document.body.removeChild("loader");
    })
})

