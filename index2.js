
const api = {
    key:"e3c349a32bcbdc44b82a3769207d34dc",
    base: "https://api.openweathermap.org/data/2.5/"
}

window.onload = function() {

    // console.log("HI");
    const searchbox = document.getElementById('searchbox');
    searchbox.addEventListener('keypress', setQuery);
        
    function setQuery(event){
         if(event.keyCode == 13){
            getResults(searchbox.value);
            console.log(searchbox.value);
        }
    }
   
    function getResults(query) {
        fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
           .then(weather =>{
               return weather.json();
                               }).then(displayResults);

    }

    function displayResults(weather){
              console.log(weather);
              let city = document.getElementById("city")
              city.innerHTML =  `${weather.name}, ${weather.sys.country}`;
              
              let now = new Date();
              let date = document.getElementById("date");
              date.innerText = dateBuilder(now);
              let temp  = document.getElementById("temp");
              temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;

              let weather_element = document.getElementById("weather");
              weather_element.innerText = weather.weather[0].main;

              let highLow = document.getElementById("highLow");
              highLow.innerText = `${Math.round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)}°C ` ;


    }
    function dateBuilder(d){
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const days = ["Sun","Mon","Tues","Wed","thurs","Fri","Sat"];

        let day =days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`;
   
    }


}
    
