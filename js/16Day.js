$(function(){
         $('#btn').click(function () {
        getWeatherByCity('en', dataReceived, showError, $('#search1').val());
    });
    getWeatherData('en', dataReceived, showError);
    
     $('#search1').keypress(function(e) {
        var ENTER_KEY_CODE = 13;
        if ( e.which === ENTER_KEY_CODE ) 
        {
            $('#btn').trigger('click');
            return false;
        }
    });  
    

    function dataReceived(data) {
        var offset = (new Date()).getTimezoneOffset()*60*1000; 
        var city = data.city.name;
        var country = data.city.country;
        $("#weatherTable tr:not(:first)").remove();
        
        $.each(data.list, function(){
       
            var localTime = new Date(this.dt*1000 - offset); 
            
            $('#location').html(city + ', <b>' + country + '</b>');
            
            addWeather(
                this.weather[0].icon,
                moment(localTime).calendar(),	
                this.weather[0].description,
                Math.round(this.temp.day) + '&deg;C',
                Math.round(this.speed) + 'm/s'
            );
        });
    }

    function addWeather(icon, day, condition, temp, speed){
        var markup = '<tr>'+
                '<td>' + day + '</td>' +
                '<td>' + '<img src="img/icons/'+ icon +'.png" />' + '</td>' +
                '<td>' + temp + '</td>' +
                '<td>' + condition + '</td>' +
                '<td>' + speed + '</td>'
            + '</tr>';
        weatherTable.insertRow(-1).innerHTML = markup; 
    }

    function showError(msg){
        $('#error').html('Сталася помилка: ' + msg);
    }
});