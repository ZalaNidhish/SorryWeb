const ok_1 = document.querySelector(".yes_1");
const ok_2 = document.querySelector(".yes_2");
const ok_3 = document.querySelector(".yes_3");
const ok_4 = document.querySelector(".yes_4");
const ok_5 = document.querySelector(".yes_5");
const no_1 = document.querySelector(".no_1");
const no_2 = document.querySelector(".no_2");
const no_3 = document.querySelector(".no_3");
const no_4 = document.querySelector(".no_4");
const no_5 = document.querySelector(".no_5");
const page1 = document.querySelector(".page1");
const page2 = document.querySelector(".page2");
const page3 = document.querySelector(".page3");
const page4 = document.querySelector(".page4");
const page5 = document.querySelector(".page5");
const page6 = document.querySelector(".page6");

var rndm_1 = Math.random()*1000;
var rndm_2 = Math.random()*1000;

function moveEl(elem) {
    elem.style.position = "absolute";
    elem.style.top = Math.floor(Math.random()*90 + 5 ) + "%";
    elem.style.left = Math.floor(Math.random()*90 + 5 ) + "%";
}


ok_1.addEventListener("click",()=>{
    page1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "none";
    page4.style.display = "none";
    page5.style.display = "none";
    page6.style.display = "flex";
})

ok_2.addEventListener("click",()=>{
    page1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "none";
    page4.style.display = "none";
    page5.style.display = "none";
    page6.style.display = "flex";
})

ok_3.addEventListener("click",()=>{
    page1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "none";
    page4.style.display = "none";
    page5.style.display = "none";
    page6.style.display = "flex";
})

ok_4.addEventListener("click",()=>{
    page1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "none";
    page4.style.display = "none";
    page5.style.display = "none";
    page6.style.display = "flex";
})

ok_5.addEventListener("click",()=>{
    page1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "none";
    page4.style.display = "none";
    page5.style.display = "none";
    page6.style.display = "flex";
})

no_1.addEventListener("click",()=>{
    page1.style.display = "none";
    page2.style.display = "flex";
    page3.style.display = "none";
    page4.style.display = "none";
    page5.style.display = "none";
    page6.style.display = "none";
})

no_2.addEventListener("click",()=>{
    page1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "flex";
    page4.style.display = "none";
    page5.style.display = "none";
    page6.style.display = "none";
})

no_3.addEventListener("click",()=>{
    page1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "none";
    page4.style.display = "flex";
    page5.style.display = "none";
    page6.style.display = "none";

})

no_4.addEventListener("click",()=>{
    page1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "none";
    page4.style.display = "none";
    page5.style.display = "flex";
    page6.style.display = "none";
})

no_5.addEventListener("mouseover",()=>{
    moveEl(no_5);
})