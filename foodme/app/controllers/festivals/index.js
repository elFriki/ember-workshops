import Ember from 'ember';

const CUISINE_OPTIONS = [
    { name: 'african', title: 'African' },
    { name: 'american', title: 'American' },
    { name: 'barbecue', title: 'Barbecue' },
    { name: 'cafe', title: 'Cafe' },
    { name: 'chinese', title: 'Chinese' },
    { name: 'czech/slovak', title: 'Czech / Slovak' },
    { name: 'german', title: 'German' },
    { name: 'indian', title: 'Indian' },
    { name: 'japanese', title: 'Japanese' },
    { name: 'mexican', title: 'Mexican' },
    { name: 'pizza', title: 'Pizza' },
    { name: 'thai', title: 'Thai' },
    { name: 'vegetarian', title: 'Vegetarian' }
];

export default Ember.Controller.extend({

    CUISINE_OPTIONS,

    /**
     * Filter criterias.
     */
    filterCuisins: [],
    filterRating: null,
    filterName: null,

    /**
     * Filter function.
     */
    filteredFestivals: Ember.computed('model', 'filterCuisins', 'filterRating', 'filterName', function() {
        let filteredFestivals = this.get('model');

        const filterCuisins = this.get('filterCuisins');
        const filterRating = this.get('filterRating');
        const filterName = this.get('filterName');

        // Filter by cuisine
        if (Ember.isPresent(filterCuisins)) {
            filteredFestivals = filteredFestivals.filter((item) =>
                filterCuisins.mapBy('name').includes(item.cuisine)
            );
        }

        // Filter by rating
        if (filterRating) {
            filteredFestivals = filteredFestivals.filterBy('rating', filterRating);
        }

        // Filter by name
        if (filterName) {
            filteredFestivals = filteredFestivals.filter((restaurant) =>
            	restaurant.name.toLowerCase().includes(filterName.toLowerCase())
            );
        }

        return filteredFestivals;
    }),

    porcentaje: Ember.computed('filteredFestivals', 'model',
      function(){
        let showing = this.get('filteredFestivals').length;
        let total = this.get('model').length;
        return Math.round((showing * 100) / total);
    }),

    actions: {

    	clear() {
    		this.set('filterCuisins', []);
    		this.set('filterRating', null);
    		this.set('filterName', null);
    		this.set('filteredFestivals', this.get('model'));
    	},

        updateRating(stars) {
            this.set('filterRating', stars.rating);
        }

    }


});
