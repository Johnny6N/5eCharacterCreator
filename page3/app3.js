const characterRace = sessionStorage.getItem("$userInput");
const characterGender = sessionStorage.getItem("$genderInput");
const proficienciesTraitsCarry = sessionStorage.getItem("proficienciesTraits");
const proficienciesTraits = proficienciesTraitsCarry.split(',')
const characterClass = sessionStorage.getItem("$classInput");

$(() => {

$('.nameRaceClass').append(`<li> ${characterClass}`)
$('.nameRaceClass').append(`<li> ${characterRace}`)
$('.nameRaceClass').append(`<li> ${characterGender}`)
$("#characterImg").attr('src', `../imgs/${characterGender}/${characterRace}.png`)
for (var i = 0; i < proficienciesTraits.length; i++) {
$('.proficiencyList').append(`<li>${proficienciesTraits[i]}`);
}
$('#panelClassDescription').attr('src', `../imgs/classes/${characterClass}.png`)

$('form').on('submit', (event) => {
  event.preventDefault();
  const $nameInput = $('#input-box').val()
  const characterName = $nameInput;
  sessionStorage.setItem("$nameInput", $nameInput);
  $('.nameRaceClass').append(`<li> ${$nameInput}`)
  console.log($nameInput);

})
})
