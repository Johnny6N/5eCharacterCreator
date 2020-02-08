// console.log($);

$(() => {

  /// Button event (not working yet):

  // if ($userInput='dragonborn') {
  //   console.log(true);
  // }

  /// Getting class list from API:
  $.ajax ({
    url:'http://www.dnd5eapi.co/api/races',

  }).then ((data) => {

    /// Generating class buttons:
    for (var i = 0; i < 9; i++) {
      const $classButton = $(`<button type="submit" id=\"${data.results[i].index}\" class="classButton">${data.results[i].index}</button>`)
      $('form').append($classButton)
    }

    /// Attributing character class choice to $userInput, and calling up class images:
    $('.classButton').on('click', (event) => {
      event.preventDefault();
      const $userInput = $(event.currentTarget).attr('id');
      $("#maleImg").attr('src', `imgs/male/${$userInput}.png`)
      $("#femaleImg").attr('src', `imgs/female/${$userInput}.png`)
      console.log($userInput);
    });

    /// Attributing gender choice to $genderInput:
    $('.genderButton').on('click', (event) => {
      event.preventDefault();
      const $genderInput = $(event.currentTarget).attr('id');
      console.log($genderInput);

      /// focusing image on gender choice:
      if ($genderInput === "male") {
        $("#femaleImg").css('opacity', '0.2')
        // $("#maleImg").css('transform', 'translate(50px)').css('background-color', 'white')
        $("#maleImg").css('opacity', '1.2')
      } else if ($genderInput === "female") {
          $("#maleImg").css('opacity', '0.2')
          $("#femaleImg").css('opacity', '1.2')
      }
    });
  });





})
