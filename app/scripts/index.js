var $ = require('jquery');
var models = require('./models/superhero.js');

var heroList = new models.SuperHeroCollection();


var data = [
  new models.SuperHero({name: 'Spider-Man', team: 'Solo'}),
  new models.SuperHero({name: 'Deadpool', team: 'Solo'}),
  new models.SuperHero({name: 'Captain America', team: 'Avengers'}),
  new models.SuperHero({name: 'Scarlet Witch', team: 'Avengers'}),
  new models.SuperHero({name: 'Starlord', team: 'Guardians of the Galaxy'}),
  new models.SuperHero({name: 'Groot', team: 'Guardians of the Galaxy'}),
  new models.SuperHero({name: 'Quake', team: 'Inhumans'}),
  new models.SuperHero({name: 'Gambit', team: 'X-Men'}),
  new models.SuperHero({name: 'Psylocke', team: 'X-Men'}),
  new models.SuperHero({name: 'Human Torch', team: 'Fantastic Four'})
];
// $.ajax({
//   url: 'http://tiny-lasagna-server.herokuapp.com/collections/superheroes',
//   type: 'POST',
//   contentType:'application/json',
//   data: JSON.stringify(data),
//   dataType:'json',
//   success: function(data){
//     //On ajax success do this
//     alert(data);
//      },
//   error: function(xhr, ajaxOptions, thrownError) {
//      //On error do this
//        if (xhr.status == 200) {
//            alert(ajaxOptions);
//        }
//        else {
//            alert(xhr.status);
//            alert(thrownError);
//        }
//    }
// });

$(function(){

$('.heroes').append('<ul></ul>');

heroList.on('add', function(hero){
  $('.heroes ul').append('<li>' + hero.get('name') + ':' + '  ' + hero.get('team') + '</li>');
});

$('.submit').on('click', function(event){
  event.preventDefault();

  $('.label').html('Loading...').prop('disabled', true);
  heroList.fetch().then(function(){
  $('.submit').html("Submit").prop('disabled', false);
  });

$('.submit2').on('click', function(event){
  event.preventDefault();
  console.log($('#hero-name').val());

  heroList.create({'name': $('#hero-name').val(), 'team': $('#hero-team').val()});
  $('#ingredient').val('');
  $('#name').val('');
  $('#type').val('');
  console.log(heroList);
});
  console.log(heroList);
});

// heroList.create({'name': 'dietz', 'team': 'awesome'});

});
