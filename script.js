const countryCard=document.querySelector(".countries-container")
const search=document.getElementById("search")
var completedata;

fetch("https://restcountries.com/v3.1/all/")
.then(res=>res.json())
.then(data=>{
    completedata=data;
    let a=[];
    console.log(data)
    let answer=""
    // <a href="./country.html?name=${country.name.common}" class="country-card">
    data.forEach(country => {  
      a[0]=country.latlng[0];
      a[1]=country.latlng[1];
      console.log(a[0],a[1])
     
       answer+= `<div class="country-card" >
                  <img src=${country.flags.svg} alt="${country.name.common}'s flag"/>
                  <div class="card-text">
                    <h2 class="card-title">${country.name.common}</h2>
                    <p><b>Capital: </b>${country.capital}</p> 
                    <p><b>Population:</b>${country.population.toLocaleString("en-IN")}</p>
                    <p><b>Region: </b>${country.region}</p>  
                    <a href="./weather.html?lat=${a[0]}&lng=${a[1]}&name=${country.name.common}" class="btn btn-primary">click for weather</a>                                   
                    </div>    
                    </div>`
    });
    countryCard.innerHTML=answer;    
})
search.addEventListener("input",(e)=>{
    const filtered_data=completedata.filter(obj=>(obj.name.common.toLowerCase()).includes(e.target.value.toLowerCase()))
// console.log(filtered_data)
let answer=""
    filtered_data.forEach(country => {
        
       answer+= 
       `<div class="country-card" >
       <img src=${country.flags.svg} alt="${country.name.common}'s flag"/>
       <div class="card-text">
         <h2 class="card-title">${country.name.common}</h2>
         <p><b>Capital: </b>${country.capital}</p> 
         <p><b>Population:</b>${country.population.toLocaleString("en-IN")}</p>
         <p><b>Region: </b>${country.region}</p>  
         <a href="./weather.html?lat=${a[0]}&lng=${a[1]}&name=${country.name.common}" class="btn btn-primary">click for weather</a>                                   
         </div>    
         </div>`
    });
    countryCard.innerHTML=answer;    

})

const select=document.getElementById("Filter-by-region")
select.addEventListener("input",(e)=>{
   console.log(e.target.value)
   fetch(`https://restcountries.com/v3.1/region/${e.target.value}`)
.then(res=>res.json())
.then(data=>{
   console.log(data)
   let response=""
   data.forEach(country => {
       
      response+= `<div class="country-card" >
      <img src=${country.flags.svg} alt="${country.name.common}'s flag"/>
      <div class="card-text">
        <h2 class="card-title">${country.name.common}</h2>
        <p><b>Capital: </b>${country.capital}</p> 
        <p><b>Population:</b>${country.population.toLocaleString("en-IN")}</p>
        <p><b>Region: </b>${country.region}</p>  
        <a href="./weather.html?lat=${a[0]}&lng=${a[1]}&name=${country.name.common}">click for weather</a>
        </div>    
        </div>`
   });
                                      
   countryCard.innerHTML=response;
})
})
const themechange=document.querySelector(".theme-change");
themechange.addEventListener("click",()=>{
    document.body.classList.toggle('dark');
}) 