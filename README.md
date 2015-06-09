# Project2

Code voor alle landen in database te steken:

		unirest.get("https://restcountries-v1.p.mashape.com/all")
		.header("X-Mashape-Key", "Fq8fET3R72mshSTocR66WXdB3Y3Up14PauwjsnvLjLCSEG8paG")
		.header("Accept", "application/json")
		.end(function (result) {
			
			var data = result.body;
			console.log(data[0]);
			for (var i = 0; i< data.length; i++){
				var landgegevens = {
					"landnaam": data[i].name,
					"regio": data[i].region,
					"landafkorting": data[i].altSpellings,
					"buurlanden": data[i].borders,
					"hoofdstad": data[i].capital,
					"mundeenheid": data[i].currencies,
					"talen": data[i].languages,
					"alpha3": data[i].alpha3Code
				}
        		var m = new Land(landgegevens);
				m.save(function (err, data){
					console.log(landgegevens);
				}); 
			}


			
		});
