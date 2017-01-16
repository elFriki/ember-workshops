import Ember from 'ember';

const host = 'https://raw.githubusercontent.com/elFriki/ember-workshops/final/';
const restaurantsUrl = `${host}resources/artists.json`;

export default Ember.Route.extend({

	model: function() {
		return Ember.$.getJSON(restaurantsUrl);
	}
});
