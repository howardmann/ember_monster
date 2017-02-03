import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    controllerCreate(){
      // newModel is an empty object passed into the component which captures all the params. We then create a new record bassed on the capture params
      let model = this.store.createRecord('planet', this.get('newModel'));
      // Reset the model
      this.set('newModel', {});
      // Save to db and then transition to show page
      model.save().then((planet) => {
        this.transitionToRoute('planets.planet', planet);
      });
    }
  },
  newModel: {}
});
