mobile=document.getElementById("mobile");
cloth=document.getElementById("cloth");
laptop=document.getElementById("laptop");
watch=document.getElementById("watch");
cart=document.getElementById("cart");

// for individual_data

// mobile.addEventListener("click",()=>{
//     display.innerHTML="Mobiles";
// })
// cloth.addEventListener("click",()=>{
//    display.innerHTML="Clothes";
// })
// laptop.addEventListener("click",()=>{
//     display.innerHTML="Laptops";
// })
// watch.addEventListener("click",()=>{
//  display.innerHTML="Watches"
// })

// for id's
cart.addEventListener("click",(e)=>{
res=e.target.id;
display.innerHTML=res;
})