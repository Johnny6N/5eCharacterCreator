const characterRace = sessionStorage.getItem("$userInput");
const characterGender = sessionStorage.getItem("$genderInput");
const characterClass = sessionStorage.getItem("$classInput");
const characterName = sessionStorage.getItem("$nameInput");
const proficienciesTraitsCarry = sessionStorage.getItem("proficienciesTraits");
const proficienciesTraits = proficienciesTraitsCarry.split(',')

// const characterStrength = sessionStorage.getItem("$strengthInput");
// const characterDexterity = sessionStorage.getItem("$dexterityInput");
// const characterConstitution = sessionStorage.getItem("$constitutionInput");
// const characterIntelligence = sessionStorage.getItem("$intelligenceInput");
// const characterWisdom = sessionStorage.getItem("$wisdomInput");
// const characterCharisma = sessionStorage.getItem("$charismaInput");

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

// const strengthMod = Math.floor((characterStrength - 10) / 2)
// $('.strength').append(`<h2>${characterStrength} / ${strengthMod}`)
// const dexterityMod = Math.floor((characterDexterity - 10) / 2)
// $('.dexterity').append(`<h2>${characterDexterity} / ${dexterityMod}`)
// const constitutionMod = Math.floor((characterConstitution - 10) / 2)
// $('.constitution').append(`<h2>${characterConstitution} / ${constitutionMod}`)
// const intelligenceMod = Math.floor((characterIntelligence - 10) / 2)
// $('.intelligence').append(`<h2>${characterIntelligence} / ${intelligenceMod}`)
// const wisdomMod = Math.floor((characterWisdom - 10) / 2)
// $('.wisdom').append(`<h2>${characterWisdom} / ${wisdomMod}`)
// const charismaMod = Math.floor((characterCharisma - 10) / 2)
// $('.charisma').append(`<h2>${characterCharisma} / ${charismaMod}`)

$('form').on('submit', (event) => {
  event.preventDefault();
  const $background = $('#background').val()

  const characterBackground = $background;
  sessionStorage.setItem("$background", $background);
  $('.nameRaceClass').append(`<li> ${$background}`)
})

$('form').on('submit', (event) => {
  event.preventDefault();
  const $equipment = $('#equipment').val()
  const characterEquipment = $equipment;
  sessionStorage.setItem("$equipment", $equipment);
  $('.equipment').append(`<li> ${$equipment}`)
})

})
