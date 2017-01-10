import Ember from 'ember';

export default Ember.Controller.extend({

	appName: 'moldingFest',

	menuLinks: [/*{
		label: 'restaurants',
		url: 'restaurants'
	},*/ {
		label: 'festivals',
		url: 'festivals'
	}, {
		label: 'artists',
		url: 'artists'
	}, {
		label: 'about',
		url: 'about'
	}]

});
