import Ember from 'ember';

export default Ember.Route.extend({
  model({id}){
    const parentModel = this.modelFor('festivals') || [];
    return parentModel.findBy('id', id);
  }
});
