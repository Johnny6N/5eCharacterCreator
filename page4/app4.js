

// Variable carryovers:
const characterRace = sessionStorage.getItem("$userInput");
const characterGender = sessionStorage.getItem("$genderInput");
const characterClass = sessionStorage.getItem("$classInput");
const characterName = sessionStorage.getItem("$nameInput");
const proficienciesTraitsCarry = sessionStorage.getItem("proficienciesTraits");
const proficienciesTraits = proficienciesTraitsCarry.split(',')
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
//

// setting roll function to roll button and calling results:
$('#roll').on('click', (event) => {
  event.preventDefault();
  rollTotal();
  for (var i = 0; i < 6; i++) {
    $(`#rollResults${i}`).text(`Roll ${(i+1)}: ${rollArray[i]}`)
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
    const strengthMod = Math.floor(($strengthInput - 10) / 2)
    $('.strength').append(`<h2>${$strengthInput} / ${strengthMod}`)
  })
  $('form').on('submit', (event) => {
    event.preventDefault();
    const $dexterityInput = $('#dexterity-input-box').val()
    const dexterityMod = Math.floor(($dexterityInput - 10) / 2)
    $('.dexterity').append(`<h2>${$dexterityInput} / ${dexterityMod}`)
  })
  $('form').on('submit', (event) => {
    event.preventDefault();
    const $constitutionInput = $('#constitution-input-box').val()
    const constitutionMod = Math.floor(($constitutionInput - 10) / 2)
    $('.constitution').append(`<h2>${$constitutionInput} / ${constitutionMod}`)
  })
  $('form').on('submit', (event) => {
    event.preventDefault();
    const $intelligenceInput = $('#intelligence-input-box').val()
    const intelligenceMod = Math.floor(($intelligenceInput - 10) / 2)
    $('.intelligence').append(`<h2>${$intelligenceInput} / ${intelligenceMod}`)
  })
  $('form').on('submit', (event) => {
    event.preventDefault();
    const $wisdomInput = $('#wisdom-input-box').val()
    const wisdomMod = Math.floor(($wisdomInput - 10) / 2)
    $('.wisdom').append(`<h2>${$wisdomInput} / ${wisdomMod}`)
  })
  $('form').on('submit', (event) => {
    event.preventDefault();
    const $charismaInput = $('#charisma-input-box').val()
    const charismaMod = Math.floor(($charismaInput - 10) / 2)
    $('.charisma').append(`<h2>${$charismaInput} / ${charismaMod}`)
    $(event.currentTarget).trigger('reset')
  })
  $('#clear').on('click', (event) => {
    event.preventDefault();
    $('.strength').children('h2').remove()
    $('.dexterity').children('h2').remove()
    $('.constitution').children('h2').remove()
    $('.intelligence').children('h2').remove()
    $('.wisdom').children('h2').remove()
    $('.charisma').children('h2').remove()


  })

});
})
