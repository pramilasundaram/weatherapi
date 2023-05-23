
const latitude = (new URLSearchParams(location.search).get('lat'));
const longitude=(new URLSearchParams(location.search).get('lng'));
const countryname=(new URLSearchParams(location.search).get('name'));
console.log(latitude,longitude,countryname)
const countryCard=document.querySelector(".country-details")
const API_key='a956034bcab66dfbd32dbd4f483f3e66'
document.querySelector(".title").innerHTML=`weather of ${countryname}`

fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_key}`)
.then(res=>res.json())
.then(data=>{   
    console.log(data)
    countryCard.innerHTML= `<div class="weather"><table class="table">   
      <tr>
        <th scope="col">weather</th> 
        <td>${data.weather[0].main}</td>       
      </tr>
      <tr>
        <th scope="col">weather description</th> 
        <td>${data.weather[0].description}
        </td>       
      </tr>
      <tr>
        <th scope="col">Temperature</th> 
        <td>${data.main.temp}kelvin</td>       
      </tr>
      <tr>
        <th scope="col">Pressure</th> 
        <td>${data.main.pressure}hPa</td>       
      </tr>
      <tr>
        <th scope="col">Humidity</th> 
        <td>${data.main.humidity}%</td>       
      </tr>
      <tr>
        <th scope="col">wind speed</th> 
        <td>${data.wind.speed}m/s</td>       
      </tr>
      </table></div>`
      });
    
  

// <p><b>Region: </b>${country.region}</p>  