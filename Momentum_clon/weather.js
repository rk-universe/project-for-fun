function getLoc(callback){

    if(!navigator.geolocation)
    {
        console.log("not supported")
    }
    function success(position){
        const lati=position.coords.latitude;
        const lan=position.coords.longitude;
        callback(lati,lan)
    }
    function error(){
        console.log("erroe occured")
    }
    navigator.geolocation.getCurrentPosition(success,error)
}

getLoc(function(lati,lan)
{
    const api_key="e2d119db02328e6efdc4593744bfa5c1";
    const weater_api="https://api.openweathermap.org/data/2.5/weather?lat="+lati+"&lon="+lan+"&appid="+api_key+"&units=metric"
    fetch(weater_api).then(response => {
        return response.json()
    } ).then(data =>{
        console.log(data.main.temp)
        document.getElementById("temp").innerText=data.main.temp
        document.getElementById("temp_img").setAttribute("src", "http://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png");
    })
   
});


