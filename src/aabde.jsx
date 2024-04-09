// var speed=0;
// var prevspeed=0;
// var cuurentScale=1;


// const increasebar=()=>{
 
//   if(speed < 180){
//     speed=speed + 10;
//     addclass();
//     cuurentScale=cuurentScale+1;
//     changeActive();
//     chaangeText();
// }
//   }
// }

// const decreasebar=()=>{ 

// if(speed > 0){
//   speed= speed - 10;
//   addclass();
//   changeActive();
//   cuurentScale=cuurentScale-1;
//   chaangeText();
// }

// }

// const addclass=()=>{
// var speed=0;


//    let newClass= "speed-" + speed;
//    let prevClass="speed-" + prevspeed;
//    let el=document.getElementsByClassName("arrow-wrap")[0];
//    if(el.classList.contains(prevClass)){
//      el.classList.remove(prevClass);
//      el.classList.add(newClass);
//    }
//    prevspeed=speed;
// }

// const changeActive=()=>{
//     let tempClass = "speedometer-scale-" + currentScale;
//     let el document.getElementsByClassName (tempClass)[0];
//     el.classList.toggle("active");
// }

// function changeText() {

//     let el = document.getElementsByClassName("km")[0];
    
//     el.innerText = speed;
// }