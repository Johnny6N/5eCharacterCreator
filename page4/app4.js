const characterRace = sessionStorage.getItem("$userInput");
const characterGender = sessionStorage.getItem("$genderInput");
const characterClass = sessionStorage.getItem("$classInput");
const characterName = sessionStorage.getItem("$nameInput");
//
let abilityScore = []
let sum = []
rollArray = []
// $(() => {
// $('#class').text(characterClass)
// $('#race').text(characterRace)
// $('#gender').text(characterGender)
// $('#name').text(characterName)
// })

let dieRoll = () => {
  for (var i = 0; i < 4; i++) {
    roll = Math.floor((Math.random() * 6) + 1)
    abilityScore.push(roll);
  }
}

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

$(() => {
  $('#class').text(characterClass)
  $('#race').text(characterRace)
  $('#gender').text(characterGender)
  $('#name').text(characterName)

$('#roll').on('click', (event) => {
  event.preventDefault();
  rollTotal();
  console.log(rollArray);
  for (var i = 0; i < 6; i++) {
// console.log(rollArray[i]);

    $(`#rollResults${i}`).text(`Roll ${(i+1)}: ${rollArray[i]}`)
    console.log(`#rollResult${i}`);
  }

})


})
