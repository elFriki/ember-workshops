import Ember from 'ember';

export default Ember.Controller.extend({

	appName: 'moldingFest',

	menuLinks: [{
		label: 'restaurants',
		url: 'restaurants'
/*	}, {
		label: 'festivales',
		url: 'festivals'
	}, {
		label: 'artistas',
		url: 'artists'
*/	}, {
		label: 'about',
		url: 'about'
	}]

});
