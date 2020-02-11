const characterRace = sessionStorage.getItem("$userInput");
const characterGender = sessionStorage.getItem("$genderInput");
const proficienciesTraitsCarry = sessionStorage.getItem("proficienciesTraits");
const proficienciesTraits = proficienciesTraitsCarry.split(',')
const characterClass = sessionStorage.getItem("$classInput");

$(() => {


$('#class').text(characterClass)
$('#race').text(characterRace)
$('#gender').text(characterGender)
$("#characterImg").attr('src', `../imgs/${characterGender}/${characterRace}.png`)
for (var i = 0; i < proficienciesTraits.length; i++) {
$('.proficiencies').append(`<h2> ${proficienciesTraits[i]}</h2>`);
}

$('form').on('submit', (event) => {
  event.preventDefault();
  const $nameInput = $('#input-box').val()
  const characterName = $nameInput;
  sessionStorage.setItem("$nameInput", $nameInput);
  $('#name').text($nameInput)
  console.log($nameInput);

})
})
