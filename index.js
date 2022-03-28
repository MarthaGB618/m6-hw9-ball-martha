var button = document.querySelector ('.button')
var inputValue = document.getElementById('.inputValue');
var returnObj = document.querySelector('.returnObject');
var name= document.querySelector('.name');
var desc= document.querySelector('.desc');
var icon = document.querySelector('.icon');
var temp = document.querySelector('.temp');
var feelsLikeTemp = document.querySelector('.feels');



button.addEventListener('click', function(){

fetch('https://api.openweathermap.org/data/2.5/weather?q={Asheville}&appid=acbd3373175e0d69a0d8d513d6f5c3c4&units=imperial'
)
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp']
        var tempValue = data['main']['feels_like']
        var descValue = data['weather'][0]['description']

        name.innerHtml = nameValue;
        temp.innerHtml = tempValue;
        feelsLikeTemp.innerHTML= feelsValuu
        desc.innerHtml = descValue
        
    })

    .catch(err => alert("Location Not Found"))
})



