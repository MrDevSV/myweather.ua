$(function(){
    $('#btnGetWeather').click(function () {
        getWeatherByCity('en', dataReceived, showError, $('#inputCityName').val());
    });
    $('#inputCityName').keypress(function(e) {
        var ENTER_KEY_CODE = 13;
        if ( e.which === ENTER_KEY_CODE ) 
        {
            $('#btnGetWeather').trigger('click');
            return false;
        }
    });    
    
    getWeatherData('en', dataReceived, showError);
      var end=0;

    function dataReceived(data) {
        var offset = (new Date()).getTimezoneOffset()*60*1000; // Відхилення від UTC в секундах
        var city = data.city.name;
        var country = data.city.country;
        var icon = data.list[0].weather[0].icon;
        var temp = data.list[0].temp.day;
        var condition = data.list[0].weather[0].description;
        var localTime = data.list[0].dt*1000 - offset;

        $("#weatherTable tr:not(:first)").remove();

          addWeather(icon,moment(localTime).format('ll'),condition,temp)
         $('#location').html(city + ', <b>' + country + '</b>');
         // Додаємо локацію на сторінку
    }

    
     function addWeather(icon, day, condition, temp){
         var markup =
         '<td>' + '<img src="img/icons/'+icon+'.png" class="img-day" />' + '</td>'+
         '<td class="td">' + '<span class="day after"></span><br>'+
            '<span class="temp after"> </span>&#176C;<br>' +
            '<span class="condition after"></span>'+'</td>'
             

         weather.innerHTML = markup;
         Text_animate('.day', 'Today:  ' + day);
         Text_animate('.temp', 'Temperature: ' + temp);
         Text_animate('.condition', 'On sky:  ' + condition);
    }
    
    function Text_animate(element, text) {
        if (!text) { // Recursion exit condition
            $(element).removeClass('after');
            return; 
        }
        $(element).append(text[0]);
        setTimeout(function () {
            Text_animate(element, text.slice(1));
        }, 0);
    }


    function showError(msg){
        $('#error').html('Сталася помилка: ' + msg);
    } 

    
        
   

      
   
});