const rocket = document.querySelector(".rocket")
const planet = document.querySelector(".planet")
const btnStart = document.querySelector(".start");
const stop1 = document.querySelector(".stop");
let active = false
let count = 0;
let idInterval;
console.log(stop1)
const flyAnimate = ()=>{
  count++
  idInterval = requestAnimationFrame(flyAnimate)
   if(count<250){
    rocket.style.bottom = count * 2.5 + "px";
    planet.style.left = count + "px";
    }else{
     cancelAnimationFrame(idInterval);
  }
}
btnStart.addEventListener("click", () => {
  if (active) {
    cancelAnimationFrame(idInterval);
    active = false;
  } else {
    idInterval = requestAnimationFrame(flyAnimate);
    active = true;
  }
});
stop1.addEventListener("click",()=>{
  location.reload();
  console.log(stop1)
})
