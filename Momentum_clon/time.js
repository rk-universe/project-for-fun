setInterval(myTimer, 1000);
function getpadd(value)
{
    if(value<10)
    {
        return "0"+value;
    }
    else{
        return value
    }
}

function myTimer() {
  const d = new Date();
var hour=getpadd(d.getHours()) ;
var min=getpadd(d.getMinutes())  ;
var sec= getpadd(d.getSeconds()) ;
var timeshow=hour+":"+min+":"+sec;

  document.getElementById("timeplace").innerText = timeshow;
}