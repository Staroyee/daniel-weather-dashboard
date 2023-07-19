var apiKey = "0e584d18f4751753861bc60159e5582b";

var formEl = document.getElementById('submitForm');

formEl.addEventListener('submit', function(event) {
  event.preventDefault();
  SubmitForm();
})

function SubmitForm() {
  var city = document.getElementById('query').value;

var locQueryUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=&appid=" + apiKey;

 fetch(locQueryUrl)
     .then(function (response) {
       if (!response.ok) {
         throw response.json();
       }
       console.log(response);
       return response.json();
     })
    .then(function (data) {
      console.log(data);
    });  
}