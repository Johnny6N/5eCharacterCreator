const characterRace = sessionStorage.getItem("$userInput");
const characterGender = sessionStorage.getItem("$genderInput");
const proficienciesTraitsCarry = sessionStorage.getItem("proficienciesTraits");
const proficienciesTraits = proficienciesTraitsCarry.split(',')
console.log(proficienciesTraits);

const classDecriptions = [
  {name: "barbarian",
  description: "A fierce warrior of primitive background who can enter a battle rage",
  hitDie: "d12",
  primaryAbility: "Strength",
  savingThrow: "Strength and Constitution",
  armorWeapon: "Light and medium armor, shields, simple and martial weapons"
}]
  // "An inspiring magician whose power echoes the music of creation", "A priestly champion who wields divine magic in service of a higher power", "A priest of the Old Faith, wielding the powers of nature — moonlight and plant growth, fire and lightning — and adopting animal forms", "A master of martial combat, skilled with a variety of weapons and armor", "A master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection", "A holy warrior bound to a sacred oath", "A holy warrior bound to a sacred oath", "A scoundrel who uses stealth and trickery to overcome obstacles and enemies", "A spellcaster who draws on inherent magic from a gift or bloodline", "A wielder of magic that is derived from a bargain with an extraplanar entity", "A scholarly magic-user capable of manipulating the structures of reality"];

// const classArr = [barbarian, druid];
// console.log(classDecriptions);
// const b = "barbarian"
// const a = (classDecriptions.name).indexOf("barbarian")
// console.log(a);

$(() => {
  $('.nameRaceClass').append(`<li> ${characterRace}`)
  $('.nameRaceClass').append(`<li> ${characterGender}`)
  $("#characterImg").attr('src', `../imgs/${characterGender}/${characterRace}.png`)
  for (var i = 0; i < proficienciesTraits.length; i++) {
  $('.proficiencyList').append(`<li>${proficienciesTraits[i]}`);
}
  /// Getting class list from API:
  $.ajax ({
    url: 'https://www.dnd5eapi.co/api/classes',

  }).then ((data) => {

    /// Generating class buttons:
    for (var i = 0; i < 12; i++) {
      const $classButton = $(`<button type="submit" id=\"${data.results[i].index}\" class="classButton">${data.results[i].index}</button>`)
      $('form').append($classButton)
      console.log($classButton);
    };
    $('.classButton').on('click', (event) => {
      event.preventDefault();
      const $classInput = $(event.currentTarget).attr('id');
      const characterClass = $classInput;
      sessionStorage.setItem("$classInput", $classInput);
      $('.nameRaceClass').append(`<li> ${$classInput}`)
      console.log($classInput);
      $('.classDescription').attr('src', `../imgs/classes/${characterClass}.png`)
      $('#panelClassDescription').attr('src', `../imgs/classes/${characterClass}.png`)
      // const found = classArr.indexOf($userInput)
      // console.log(found);
      // $('p').text()
      // if ($classInput === 'barbarian') {
      //   $('p').text(barbarian)
      // } else if ($classInput === 'bard') {
      //   $('p').text(bard)
      // } else if ($classInput === 'cleric') {
      //   $('p').text(cleric)
      // } else if ($classInput === 'druid') {
      //   $('p').text(druid)
      // } else if ($classInput === 'fighter') {
      //   $('p').text(fighter)
      // } else if ($classInput === 'monk') {
      //   $('p').text(monk)
      // } else if ($classInput === 'paladin') {
      //   $('p').text(paladin)
      // } else if ($classInput === 'ranger') {
      //   $('p').text(ranger)
      // } else if ($classInput === 'rogue') {
      //   $('p').text(rogue)
      // } else if ($classInput === 'sorcerer') {
      //   $('p').text(sorcerer)
      // } else if ($classInput === 'warlock') {
      //   $('p').text(warlock)
      // } else if ($classInput === 'wizard') {
      //   $('p').text(wizard)
      // }
    });
  });
})
