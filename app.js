proficienciesTraits = [];

$(() => {

  /// Getting race list from API:
  $.ajax ({
    url: 'https://www.dnd5eapi.co/api/races',

  }).then ((data) => {

    /// Generating race buttons:
    for (var i = 0; i < 9; i++) {
      const $raceButton = $(`<button type="submit" id=\"${data.results[i].index}\" class="raceButton">${data.results[i].index}</button>`)
      $('form').append($raceButton)
      console.log($raceButton);
    }
    //

    /// Attributing character race choice to $userInput, and calling up race images:
    $('.raceButton').on('click', (event) => {
      event.preventDefault();
      $('.nameRaceClass').children('li').remove()
      $('.proficiencyList').children('li').remove()
      proficienciesTraits = [];
      const $userInput = $(event.currentTarget).attr('id');
      $("#maleImg").attr('src', `imgs/male/${$userInput}.png`).css('display', 'inline-block')
      $("#femaleImg").attr('src', `imgs/female/${$userInput}.png`).css('display', 'inline-block')
      const characterRace = $userInput;
      sessionStorage.setItem("$userInput", $userInput);
      $('.nameRaceClass').append(`<li>${$userInput}`)
      //

      // Getting proficiencies/traits, and assigning them:
      $.ajax ({
        url: `https://www.dnd5eapi.co/api/races/${characterRace}`,

      }).then ((data) => {
        for (var i = 0; i < data.starting_proficiencies.length; i++) {
          $('.proficiencyList').append(`<li>${data.starting_proficiencies[i].name}`);
          proficienciesTraits.push(`${data.starting_proficiencies[i].name}`)
        }
        for (var i = 0; i < data.traits.length; i++) {
          $('.proficiencyList').append(`<li>${data.traits[i].name}`);
          // $('.proficiencies').append(`<h4>${data.traits[i].name}</h4>`);
          proficienciesTraits.push(`${data.traits[i].name}`)
        }
        const proficienciesTraitsCarry = proficienciesTraits;
        sessionStorage.setItem("proficienciesTraits", proficienciesTraits);
        console.log(proficienciesTraitsCarry);
      })
    //
    });

    /// Attributing gender choice to $genderInput:
    $('.genderButton').on('click', (event) => {
      event.preventDefault();
      $('.nameRaceClass').children('li').eq(1).remove()
      const $genderInput = $(event.currentTarget).attr('id');
      const characterGender = $genderInput;
      sessionStorage.setItem("$genderInput", $genderInput);
      $('#gender').text($genderInput)
      $('.nameRaceClass').append(`<li> ${$genderInput}`)

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
