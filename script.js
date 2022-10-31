let lon;
let lat;
let temperature = document.querySelector("temp")
let summary = document.querySelector ("summary")
let loc = document.querySelector ("location")
let icon = document.querySelector("icon")







window.addEventListener("load" ,()  =>  {



    if (navigator.geolocation){

        navigator.geolocation.getCurrentPosition((position) =>  {

        

        console.log(position);
        lon = position.coords.longitude;
        lat = position.coords.latitude;


        //ID API


        const api = "dd9db77ce8fa10be89ccef5c36e32e92";
        
        const url_base ='http://api.openweathermap.org/data/2.5/weather?lat=${lat&}'
        `lon=${lon}&appid=${api_id}';



        fetch(url_base)
        .then((response) => ¨{

                console.log ("RESPUESTA JSON") ;

                return respons.json();
 

})
 
.then ((data) => {

        
        console.log("ESTA ES LA DATA")
        console.log.(data);


temperture.textcontect =
math.floor(data.main.temp - kelvin) + "°C";
summary.textContect = data.weather [0].description;
loc.textContect = data,name + "," + data.sys.country;
        });

});





})



        )

}



