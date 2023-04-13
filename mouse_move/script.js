let eyeboll=document.getElementsByClassName('eyeboll')

let pupilRange=150;

// for X
var XcurrentPossition=0
var Xfrac=0;

// for y 
var YcurrentPossition=0
var Yfrac=0;


const mousemovefun=(event)=>{
    // for X
    XcurrentPossition=event.clientX
    Xfrac=XcurrentPossition/window.innerWidth
    // for Y
    YcurrentPossition=event.clientY
    Yfrac=YcurrentPossition/window.innerHeight

    let XpupilcurrPoss=-75+Xfrac*pupilRange
    let YpupilcurrPoss=-75+Yfrac*pupilRange

    eyeboll[0].style.transform=`translateX(${XpupilcurrPoss}px) translateY(${YpupilcurrPoss}px)` ;
    eyeboll[1].style.transform=`translateX(${XpupilcurrPoss}px) translateY(${YpupilcurrPoss}px)` ;
    }

   


window.addEventListener("mousemove", mousemovefun)