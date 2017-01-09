import Ember from 'ember';

const host = 'https://raw.githubusercontent.com/elFriki/ember-workshops/master/';
const restaurantsUrl = `${host}resources/restaurants.json`;

export default Ember.Route.extend({

	model: function() {
		return Ember.$.getJSON(restaurantsUrl);
	}
});
