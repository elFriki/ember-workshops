import Ember from 'ember';
const languages= [
	{ name: 'ES', code: 'es', flagUrl: 'http://www.ember-power-select.com/flags/es.svg' },
	{ name: 'UK', code: 'en', flagUrl: 'http://www.ember-power-select.com/flags/gb.svg' },
	{ name: 'FR', code: 'fr', flagUrl: 'http://www.ember-power-select.com/flags/fr.svg' },
	{ name: 'PT', code: 'pt', flagUrl: 'http://www.ember-power-select.com/flags/pt.svg' }
];

export default Ember.Component.extend({

	tagName: 'nav',

	classNames: [],

	isMenuOpened: false,

	i18n: Ember.inject.service(),

	moment: Ember.inject.service(),

	languages,

	selectedLanguage: languages[0],

	onSelectedLanguageChange: Ember.observer('selectedLanguage', function() {
		this.set('i18n.locale', this.get('selectedLanguage.code'));
		this.get('moment').setLocale(this.get('selectedLanguage.code'));
	}),

	actions:  {
		toggleMenu() {
			this.toggleProperty('isMenuOpened');
		}
	}
});
