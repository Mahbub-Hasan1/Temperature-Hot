var inputBox = document.querySelector('#inputBox');
var button = document.querySelector('button');
var name = document.querySelector('h1');
var desc = document.querySelector('span');
var cloud = document.querySelector('.cloud');

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputBox.value+'&appid=53f6bf57d12e08dc2f9ebd6b92958edb')
    .then(Response => Response.json())
    .then(data => {
        var nameNumber = data['name'];
        var degNumber = data['main']['temp'];
        var cloudNumber = data['weather'][0]['main'];

        // degNumber = degNumber / 10;
        // degNumber.toFixed(1);

        document.querySelector('h1').innerHTML = nameNumber;
        desc.innerHTML = (degNumber / 10).toFixed(1);
        cloud.innerText = cloudNumber;

        

        console.log(data);
        // console.log(cloudNumber)
        
    })

    .catch(err => alert('Wrong city name!'));

})
// if (cloudNumber.innerHTML == Haze) {
//     document.getElementById('img').style.backgroundImage = url('1.jpg');
// }