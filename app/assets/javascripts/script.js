$(document).ready(function(){
	function addZero(i) {
	    if (i < 10) {
	        i = "0" + i;
	    }
	    return i;
	}
	function refreshTime() {
		new Date($.now());
		var dt = new Date();
		var time = addZero(dt.getHours()) + ":" + addZero(dt.getMinutes());
		//var date =
	   $('.time b').text(time);
	};
	setInterval(refreshTime, 100);

	function refreshWeather() {
		$.simpleWeather({
			location: 'Paris, FR',
			woeid: '',
			unit: 'c',
			success: function(weather) {
				var icon = weather.currently;
				icon = icon.toLowerCase();
				icon = icon.split(' ').join('-');
				$('#time i').addClass("wi wi-"+icon);
				$('#time h3 b').text(weather.temp +", "+weather.currently);
				$('#time h4').text(weather.city);
			},
			error: function(error) {
				$("#weather").html('<p>'+error+'</p>');
			}
		});
	};
	setInterval(refreshWeather, 30000);

});
