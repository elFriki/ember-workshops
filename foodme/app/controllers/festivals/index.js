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
    filterPrice: null,
    filterName: null,

    /**
     * Filter function.
     */
    filteredFestivals: Ember.computed('model', 'filterCuisins', 'filterRating',
    'filterPrice', 'filterName', function() {
        let filteredFestivals = this.get('model');

        const filterCuisins = this.get('filterCuisins');
        const filterRating = this.get('filterRating');
        const filterPrice = this.get('filterPrice');
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

        // Filter by price
        if (filterPrice) {
            filteredFestivals = filteredFestivals.filterBy('price', filterPrice);
        }

        // Filter by name
        if (filterName) {
            filteredFestivals = filteredFestivals.filter((festival) =>
            	festival.name.toLowerCase().includes(filterName.toLowerCase())
            );
        }

        return filteredFestivals;
    }),
    cienXcien: Ember.computed('porcentaje', function(){
      if (this.get('porcentaje') === 100) {
        return true;
      }
      return false;
    }),

    porcentaje: Ember.computed('filteredFestivals', 'model',
      function(){
        let showing = this.get('filteredFestivals').length;
        let total = this.get('model').length;
        return Math.round((showing * 100) / total);
    }),

    actions: {

      clearRating() {
        this.set('filterRating', null);
        //this.set('filteredFestivals', this.get('model'));
      },

      clearPrice() {
        this.set('filterPrice', null);
        //this.set('filteredFestivals', this.get('model'));
      },

      clearName() {
        this.set('filterName', null);
        //this.set('filteredFestivals', this.get('model'));
      },

    	clear() {
    		this.set('filterPrice', null);
    		this.set('filterRating', null);
    		this.set('filterName', null);
    		//this.set('filteredFestivals', this.get('model'));
    	},

      updateRating(stars) {
          this.set('filterRating', stars.rating);
      },

      updatePrice(stars) {
          this.set('filterPrice', stars.rating);
      }

    }


});
