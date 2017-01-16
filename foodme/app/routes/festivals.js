import Ember from 'ember';

const host = 'https://raw.githubusercontent.com/elFriki/ember-workshops/final/';
const festivalsUrl = `${host}resources/festivals.json`;

export default Ember.Route.extend({

	model: function() {
		return Ember.$.getJSON(festivalsUrl);
	}
});
