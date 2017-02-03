import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    controllerUpdate(model){
      model.save().then((planet)=>{
        this.transitionToRoute('planets.planet', planet);
      })
    }
  }
});
