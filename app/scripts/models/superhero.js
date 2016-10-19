var Backbone = require('backbone');

var SuperHero = Backbone.Model.extend({
  defaults: {
    brand: 'Marvel'
  }
});

var SuperHeroCollection = Backbone.Collection.extend({
  model: SuperHero,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/superheroes',
  parse: function(data){
    return data;
  }
});










module.exports = {
  SuperHero: SuperHero,
  SuperHeroCollection: SuperHeroCollection
};
