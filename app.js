// console.log($);

$(() => {

  /// Button event (not working yet):

  // if ($userInput='dragonborn') {
  //   console.log(true);
  // }

  /// Getting race list from API:
  $.ajax ({
    url:'http://www.dnd5eapi.co/api/races',

  }).then ((data) => {

    /// Generating race buttons:
    for (var i = 0; i < 9; i++) {
      const $raceButton = $(`<button type="submit" id=\"${data.results[i].index}\" class="raceButton">${data.results[i].index}</button>`)
      $('form').append($raceButton)
      console.log($raceButton);
    }

    /// Attributing character race choice to $userInput, and calling up race images:
    $('.raceButton').on('click', (event) => {
      event.preventDefault();
      const $userInput = $(event.currentTarget).attr('id');
      $("#maleImg").attr('src', `imgs/male/${$userInput}.png`).css('display', 'inline-block')
      $("#femaleImg").attr('src', `imgs/female/${$userInput}.png`).css('display', 'inline-block')
      console.log($userInput);
    });

    /// Attributing gender choice to $genderInput:
    $('.genderButton').on('click', (event) => {
      event.preventDefault();
      const $genderInput = $(event.currentTarget).attr('id');
      console.log($genderInput);

      /// focusing image on gender choice:
      if ($genderInput === "male") {
        $("#femaleImg").css('display', 'none')
        $("#maleImg").css('translate', '100px').css('display', 'inline-block')
      } else if ($genderInput === "female") {
        $("#maleImg").css('display', 'none')
        $("#femaleImg").css('translate', '100px').css('display', 'inline-block')
      }
    });

  });
})
