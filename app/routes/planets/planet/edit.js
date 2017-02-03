import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    updatePlanet(model){
      var self = this;
      model.save().then(function(planet){
        self.transitionTo('planets.planet', planet);
      });
    }
  }
});
