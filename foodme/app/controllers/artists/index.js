import Ember from 'ember';

export default Ember.Controller.extend({

    /**
     * Filter criterias.
     */
    filterRating: null,
    filterName: null,

    /**
     * Filter function.
     */
    filteredArtists: Ember.computed('model', 'filterRating', 'filterName', function() {
        let filteredArtists = this.get('model');

        const filterRating = this.get('filterRating');
        const filterName = this.get('filterName');

        // Filter by rating
        if (filterRating) {
            filteredArtists = filteredArtists.filterBy('rating', filterRating);
        }

        // Filter by name
        if (filterName) {
            filteredArtists = filteredArtists.filter((restaurant) =>
            	restaurant.name.toLowerCase().includes(filterName.toLowerCase())
            );
        }

        return filteredArtists;
    }),

    cienXcien: Ember.computed('porcentaje', function(){
      if (this.get('porcentaje') === 100) {
        return true;
      }
      return false;
    }),

    porcentaje: Ember.computed('filteredArtists', 'model',
      function(){
        let showing = this.get('filteredArtists').length;
        let total = this.get('model').length;
        if (total) {
          return Math.round((showing * 100) / total);
        } else {
          return total;
        }
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
