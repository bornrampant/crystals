	$(document).ready(function(){
		var numbersToGuess = 100;
		var counter = 0;
		var numbers = (20,33,11,12)
		function shuffle(a) {
	    var j, x, i;
	    for (i = a.length; i; i--) {
	        j = Math.floor(Math.random() * i);
	        x = a[i - 1];
	        a[i - 1] = a[j];
	        a[j] = x;
	    }
	}
	shuffle(numbers);
	console.log = (numbers);
		var images = ("img0.jgp", "img1.jpg")


		$('#number').text(numbersToGuess);
		for (var i=0; i<number.length; i++){
			var imageCrystal =$('<img>');
			imageCrystal.attr('data-num', numbers[i]);
			imageCrystal.attr('src',________);
			imageCrystal.attr('alt', "crystals");
			imageCrystal.addClass('crystalImage');

			$('#crystals').append(imageCrystal);
		}
		$('.crystal.image').on('click', function(){
			counter = counter = parseint($(this data-num))
		}
	}


	  // WebFontConfig = {
	  //   google: { families: [ 'Amatica+SC:400,700:latin' ] }
	  // };
	  // (function() {
	  //   var wf = document.createElement('script');
	  //   wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
	  //   wf.type = 'text/javascript';
	  //   wf.async = 'true';
	  //   var s = document.getElementsByTagName('script')[0];
	  //   s.parentNode.insertBefore(wf, s);
	 })(); 
	 </script>