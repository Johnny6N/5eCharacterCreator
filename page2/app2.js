const characterRace = sessionStorage.getItem("$userInput");
const characterGender = sessionStorage.getItem("$genderInput");

const barbarian = ["A fierce warrior of primitive background who can enter a battle rage", "D12", "Strength", "Strength and Constitution", "Light and medium armor, shields, simple and martial weapons"];
const bard = "An inspiring magician whose power echoes the music of creation";
const cleric = "A priestly champion who wields divine magic in service of a higher power";
const druid = "A priest of the Old Faith, wielding the powers of nature — moonlight and plant growth, fire and lightning — and adopting animal forms";
const fighter = "A master of martial combat, skilled with a variety of weapons and armor";
const monk = "A master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection";
const paladin = "A holy warrior bound to a sacred oath";
const ranger = "A holy warrior bound to a sacred oath";
const rogue = "A scoundrel who uses stealth and trickery to overcome obstacles and enemies";
const sorcerer = "A spellcaster who draws on inherent magic from a gift or bloodline";
const warlock = "A wielder of magic that is derived from a bargain with an extraplanar entity";
const wizard = "A scholarly magic-user capable of manipulating the structures of reality";

const classArr = [barbarian, druid];


$(() => {
  $('#race').text(characterRace)
  $('#gender').text(characterGender)

  /// Getting class list from API:
  $.ajax ({
    url:'http://www.dnd5eapi.co/api/classes',

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
      $('#class').text($classInput)
      console.log($classInput);
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
