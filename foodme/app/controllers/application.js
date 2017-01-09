import Ember from 'ember';

export default Ember.Controller.extend({

	appName: 'moldingFest',

	menuLinks: [{
		label: 'restaurants',
		url: 'restaurants'
	}, {
		label: 'about',
		url: 'about'
	}]

});