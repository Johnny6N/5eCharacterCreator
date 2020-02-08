// console.log($);

$(() => {

$.ajax ({
  url:'http://www.dnd5eapi.co/api/races',

}).then ((data) => {
  // console.log(data.results[0].index);
  for (var i = 0; i < 9; i++) {
    // console.log(data.results[i].index);
    const $classButton = $('<button>')
    $('buttonChoices').append($classButton)
    console.log($classButton);
  }

})







})
