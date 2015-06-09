// These code snippets use an open-source library.
$(document).ready(function(){
    var socket = io.connect('http://localhost:3000');
var allegegevens;
socket.on('land', function(data){
	allegegevens = data;

	});
	
	$( "div.box" ).on( "click", swipeHandler );

	function swipeHandler( event ){
			var valueTravel = $("input[type='radio'][name='travelwith']:checked").val();
		
   			socket.emit('getCountry', valueTravel);
			$('.earth1').addClass('earth2');
			$('.earth1').removeClass('earth1');
			$('div.box').addClass('clicktostop');
			$('#header').html('<h1>Tap again to get your country!</h1>');
		

	}
	
	$('.box').on('click','.earth2', function() {
		$.get('/land', function (data) {
			console.log(allegegevens);
			console.log(data);
			$('.container').fadeOut("fast").empty();
			$('.container').html(data).fadeIn("slow");
			var str = allegegevens.landafkorting[0];
			var str2 = allegegevens.landnaam;
			var res = str.toLowerCase();
			var replace = str2.replace(" ", "-");
			var laand = replace;

			console.log(laand);

			$('.land').html('<h4>'+allegegevens.landnaam+'<h4>');
			$('.capital').html('<h4>'+allegegevens.hoofdstad +'<h4>');

			$('.currency').html('<h4>'+allegegevens.mundeenheid+'<h4>');
			$('.languages').html('<h4>'+allegegevens.talen +'<h4>');
			$('.circle').css('background-image','url("http://www.geonames.org/flags/x/'+res+'.gif")');
			$('#meerinfo').html('<a href="http://travel.state.gov/content/passports/english/country/'+laand+'.html">hier</a>');

		});
    });
	
	$(this).on('click', '.myButton', function() {
	window.location.replace("http://localhost:3000/");


    });

	
	

});