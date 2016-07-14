  $( document ).ready(function() {
    var numberToGuess = 1000;
    var counter = 0;
    var numbers = [150, 250, 300, -350, 50];
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
    console.log(numbers);
    $('#number').text(numberToGuess);
    for (var i=0; i< numbers.length; i++){
      var imageCrystal = $('<img>');
      imageCrystal.attr('data-num', numbers[i]);
      imageCrystal.attr('src', 'img/p.jpg');
      imageCrystal.attr('alt', 'crystals');
      imageCrystal.addClass('crystalImage');
      $('#crystals').append(imageCrystal);

    }
    for (var i=0; i< numbers.length; i++){
      var imageCrystal = $('<img>');
      imageCrystal.attr('data-num', numbers[i]);
      imageCrystal.attr('src', 'img/g.jpg');
      imageCrystal.attr('alt', 'crystals');
      imageCrystal.addClass('crystalImage');
      $('#crystals').append(imageCrystal);
      
    }
    for (var i=0; i< numbers.length; i++){
      var imageCrystal = $('<img>');
      imageCrystal.attr('data-num', numbers[i]);
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
  });