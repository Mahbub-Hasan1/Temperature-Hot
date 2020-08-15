var inputBox = document.querySelector('#inputBox');
var button = document.querySelector('button');
var name = document.querySelector('h1');
var desc = document.querySelector('span');
var cloud = document.querySelector('.cloud');

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputBox.value+'&appid=53f6bf57d12e08dc2f9ebd6b92958edb')
    .then(Response => Response.json())
    .then(data => {
        var nameNumber = data['sys']['country'];
        var degNumber = data['wind']['deg'];
        var cloudNumber = data['weather'][0]['main'];

        document.querySelector('h1').innerHTML = nameNumber;
        desc.innerHTML = degNumber;
        cloud.innerText = cloudNumber;
        console.log(data);
        // console.log(cloudNumber)
    })

    .catch(err => alert('Wrong city name!'));
})