  //   var winCounter  = 0;
  //   var lossCounter = 0;

  // if (numberToGuess.toString() == yourNumber.toString()) {
  //   winCounter++; // add to the win s
  // $(".winCounter").HTML(winCounter)
  //   startGame(); // restarts  game
  // }
  // else if(numberToGuess =< numbers) {
  //   lossCounter++;   // add to the losses 
  // $(".lossCounter").HTML(lossCounter)



  $( document ).ready(function() {
    var numberToGuess = Math.floor(Math.random() * (120-19+1) ) + 1;
    var counter = 0;
    var numbers = Math.floor(Math.random() * 12 ) + 1
    var i = 0;
    function shuffle() {
      return Math.floor(Math.random() * 12 ) + 1;
    }
    // shuffle(randomStart);  
    numbers = shuffle();
    console.log(numbers);
    $('#number').text(numberToGuess);
      var imageCrystal = $('<img>');
      imageCrystal.attr('data-num', numbers);
      imageCrystal.attr('src', 'img/p.jpg');
      imageCrystal.attr('alt', 'crystals');
      imageCrystal.addClass('crystalImage');
      $('#crystals').append(imageCrystal);

   // }
      numbers = shuffle();

    for (var i=0; i< 1; i++){
      var imageCrystal = $('<img>');
      imageCrystal.attr('data-num', numbers);
      imageCrystal.attr('src', 'img/g.jpg');
      imageCrystal.attr('alt', 'crystals');
      imageCrystal.addClass('crystalImage');
      $('#crystals').append(imageCrystal);
      
    }
    
     numbers = shuffle();

    for (var i=0; i< 1; i++){
      var imageCrystal = $('<img>');
      imageCrystal.attr('data-num', numbers);
      imageCrystal.attr('src', 'img/y.jpg');
      imageCrystal.attr('alt', 'crystals');
      imageCrystal.addClass('crystalImage');
      $('#crystals').append(imageCrystal);
      
    }
    $('.crystalImage').on('click', function(){
      counter = counter + parseInt($(this).data('num'));
      $('#yourNumber').text(counter);
      if (counter == numberToGuess){
        alert('WINNER!');
      }else if( counter > numberToGuess){
        alert('Game OVER Man!');
      }
    });

    startGame(); // restarts  game
  });