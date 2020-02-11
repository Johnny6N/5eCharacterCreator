const characterRace = sessionStorage.getItem("$userInput");
const characterGender = sessionStorage.getItem("$genderInput");
const characterClass = sessionStorage.getItem("$classInput");
console.log(characterRace);
$(() => {


$('#class').text(characterClass)
$('#race').text(characterRace)
$('#gender').text(characterGender)

$('#nname').on('click', (event) => {
  event.preventDefault();
  const $nameInput = $(event.currentTarget).attr('id');
  const characterName = $nameInput;
  sessionStorage.setItem("$nameInput", $nameInput);
  $('#name').text($nameInput)
  console.log($nameInput);

})
})
