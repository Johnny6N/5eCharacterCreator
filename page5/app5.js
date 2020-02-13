

// Variable carryovers:
const characterRace = sessionStorage.getItem("$userInput");
const characterGender = sessionStorage.getItem("$genderInput");
const characterClass = sessionStorage.getItem("$classInput");
const characterName = sessionStorage.getItem("$nameInput");
const proficienciesTraitsCarry = sessionStorage.getItem("proficienciesTraits");
const proficienciesTraits = proficienciesTraitsCarry.split(',')
const characterBackground = sessionStorage.getItem("$background");
const characterEquipment = sessionStorage.getItem("$equipment");

//

// initializers for roll variables:
let abilityScore = []
let sum = []
rollArray = []
//

// random roll function for 6-sided die:
let dieRoll = () => {
  for (var i = 0; i < 4; i++) {
    roll = Math.floor((Math.random() * 6) + 1)
    abilityScore.push(roll);
  }
}
//

// Getting all 6 ability score rolls:
const rollTotal = () => {
  for (var i = 0; i < 6; i++) {
  dieRoll();
  abilityScore.sort().shift();
  sum = abilityScore.reduce((a,b) => a + b, 0);
  abilityScore = [];
  rollArray.push(sum);
  }
return rollArray;
}
//

// loading jQuery and carrying over name/race/gender/class:
$(() => {

  $('.nameRaceClass').append(`<li> ${characterName}`)
  $('.nameRaceClass').append(`<li> ${characterClass}`)
  $('.nameRaceClass').append(`<li> ${characterRace}`)
  $('.nameRaceClass').append(`<li> ${characterGender}`)
  $("#characterImg").attr('src', `../imgs/${characterGender}/${characterRace}.png`)
  for (var i = 0; i < proficienciesTraits.length; i++) {
  $('.proficiencyList').append(`<li>${proficienciesTraits[i]}`);
  }
  $('#panelClassDescription').attr('src', `../imgs/classes/${characterClass}.png`)
  $('.nameRaceClass').append(`<li> ${characterBackground}`)
  $('.equipment').append(`<li> ${characterEquipment}`)


//

// setting roll function to roll button and calling results:
$('#roll').on('click', (event) => {
  event.preventDefault();
  rollTotal();
  for (var i = 0; i < 6; i++) {
    $(`#rollResults${i}`).text(`Roll ${(i+1)}: ${rollArray[i]}`)
    $(`#rollResults${i}`).on('click', (event) => {
    $(event.currentTarget).css('text-decoration', 'line-through')
    })
  }

})
//

// getting API for race bonuses to ability scores:
$.ajax ({
  url:`http://www.dnd5eapi.co/api/races/${characterRace}`,

  }).then ((data) => {

    for (var i = 0; i < data.ability_bonuses.length; i++) {
      $(`#abilityBonus${(i+1)}`).text(`${characterRace} gets ${data.ability_bonuses[i].name} + ${data.ability_bonuses[i].bonus}`)
    }


    $('form').on('submit', (event) => {
      event.preventDefault();
      const $strengthInput = $('#strength-input-box').val()
      if ($strengthInput > 0) {
        const strengthMod = Math.floor(($strengthInput - 10) / 2)
        $('.strength').append(`<h2>${$strengthInput} / ${strengthMod}`)
      }
      const characterStrength = $strengthInput;
      sessionStorage.setItem("$strengthInput", $strengthInput);

      const $dexterityInput = $('#dexterity-input-box').val()
      if ($dexterityInput > 0) {
        const dexterityMod = Math.floor(($dexterityInput - 10) / 2)
        $('.dexterity').append(`<h2>${$dexterityInput} / ${dexterityMod}`)
      }
      const characterDexterity = $dexterityInput;
      sessionStorage.setItem("$dexterityInput", $dexterityInput);

      const $constitutionInput = $('#constitution-input-box').val()
      if ($constitutionInput > 0) {
        const constitutionMod = Math.floor(($constitutionInput - 10) / 2)
        $('.constitution').append(`<h2>${$constitutionInput} / ${constitutionMod}`)
      }
      const characterConstitution = $constitutionInput;
      sessionStorage.setItem("$constitutionInput", $constitutionInput);

      const $intelligenceInput = $('#intelligence-input-box').val()
      if ($intelligenceInput > 0) {
        const intelligenceMod = Math.floor(($intelligenceInput - 10) / 2)
        $('.intelligence').append(`<h2>${$intelligenceInput} / ${intelligenceMod}`)
      }
      const characterIntelligence = $intelligenceInput;
      sessionStorage.setItem("$intelligenceInput", $intelligenceInput);

      const $wisdomInput = $('#wisdom-input-box').val()
      if ($wisdomInput > 0) {
        const wisdomMod = Math.floor(($wisdomInput - 10) / 2)
        $('.wisdom').append(`<h2>${$wisdomInput} / ${wisdomMod}`)
      }
      const characterWisdom = $wisdomInput;
      sessionStorage.setItem("$wisdomInput", $wisdomInput);

      const $charismaInput = $('#charisma-input-box').val()
      if ($charismaInput > 0) {
        const charismaMod = Math.floor(($charismaInput - 10) / 2)
        $('.charisma').append(`<h2>${$charismaInput} / ${charismaMod}`)
      }
      const characterCharisma = $charismaInput;
      sessionStorage.setItem("$charismaInput", $charismaInput);
      $(event.currentTarget).trigger('reset')
    });

    $('#clear').on('click', (event) => {
      event.preventDefault();
      $('.strength').children('h2').remove()
      $('.dexterity').children('h2').remove()
      $('.constitution').children('h2').remove()
      $('.intelligence').children('h2').remove()
      $('.wisdom').children('h2').remove()
      $('.charisma').children('h2').remove()
    });
  });
})
