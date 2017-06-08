$(document).ready(function(){
	var days = ['Lundi','Mardi','Mercredi','Jeudi','Vendredi'];
	var months = ['Janvier','Fevrier','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];
	var icon = ['tornado','day-storm-showers','hurricane','thunderstorm','thunderstorm','rain-mix','rain-mix','rain-mix','hail','showers','hail','showers','showers','snow','day-snow','snow-wind','snow','hail','rain-mix','dust','fog','windy','smoke','strong-wind','strong-wind','snowflake-cold','cloudy','night-cloudy','day-cloudy','night-cloudy','day-cloudy','night-clear','day-sunny','night-partly-cloudy','day-sunny-overcast','rain-mix','hot','day-storm-showers','day-storm-showers','day-storm-showers','showers','snow-wind','snow','snow-wind','day-sunny-overcast','day-storm-showers','snow','day-storm-showers','stars'];
	var height = $('#map').height();
	var width = $('#map').width();
	$('#map img').css('height',height/1.1);
	var iWidth = $('#map img').width();
	$('#map img').css('margin-left',(iWidth/2)*-1);
	var iHeight = $('#map img').height();
	$('#map img').css('margin-top',(iHeight/2)*-1);
	$('#canvas').attr('width',iWidth);
	$('#canvas').attr('height',iHeight);

	function refreshTime() {
		var now = moment($.now());
		var time = now.format('HH:mm');
		var date =  now.format('dddd D MMMM');
		var year = now.format('YYYY');
		$('#hour b').text(time);
		$('#date').text();
		$('#year').text();
	};
	setInterval(refreshTime, 100);
	if ("geolocation" in navigator) {
    	navigator.geolocation.getCurrentPosition(function(position) {
			refreshWeather(position.coords.latitude+','+position.coords.longitude); //load weather using your lat/lng coordinates
		});
	}
	function refreshWeather(location, woeid) {
		$.simpleWeather({
			location: location,
			woeid: woeid,
			unit: 'c',
			success: function(weather) {
				var i = weather.code;
				$('#time #icon').addClass("wi wi-"+icon[i]);
				$('#time h3 b').html(weather.temp +"<i class='wi wi-celsius'></i>,<br>"+weather.currently);
				$('#time .city').text(weather.city);
			},
			error: function(error) {
				$("#weather").html('<p>'+error+'</p>');
			}
		});
	};
	setInterval(refreshWeather, 30000);
	function altClass(){
		//$('.nav-tabs li').not('.active').find('a').tab('show');
	}
	setInterval(altClass, 3000);
});
$(window).resize(function(){
	var height = $('#map').height();
	var width = $('#map').width();
	$('#map img').css('height',height/1.1);
	var iWidth = $('#map img').width();
	$('#map img').css('margin-left',(iWidth/2)*-1);
	var iHeight = $('#map img').height();
	$('#map img').css('margin-top',(iHeight/2)*-1);
	$('#canvas').attr('width',iWidth);
	$('#canvas').attr('height',iHeight);
});
