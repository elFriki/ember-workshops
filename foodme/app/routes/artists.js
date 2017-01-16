import Ember from 'ember';

const host = 'https://raw.githubusercontent.com/elFriki/ember-workshops/final/';
const artistsUrl = `${host}resources/artists.json`;

export default Ember.Route.extend({

	model: function() {
		return Ember.$.getJSON(artistsUrl);
	}
});
