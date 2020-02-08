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
      const $classButton = $(`<button type="submit" id=\"${data.results[i].index}\" class="button">${data.results[i].index}</button>`)
      $('form').append($classButton)
    }

    /// Attributing click (character class) to $userInput:
    $('.button').on('click', (event) => {
      event.preventDefault();
      const $userInput = $(event.currentTarget).attr('id');
      console.log($userInput);
    });

  });



  // <button type="submit" id="BRONX"      class="button">Bronx     </button>
  // <button type="submit" id="dragonborn" class="button">dragonborn</button>
  // const $classButton = $(`<button type="submit" id=\"${data.results[i].index}\" class="button">${data.results[i].index}</button>`)

})
