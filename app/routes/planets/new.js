import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createPlanet(model){
      var self = this;
      model.save().then(function(planet){
        self.transitionTo('planets.planet', planet);
      });
    }
  },
  model(){
    return this.store.createRecord('planet');
  }
});
