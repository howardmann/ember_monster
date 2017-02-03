import Ember from 'ember';

export default Ember.Controller.extend({
  trainerParams: {},
  actions: {
    createTrainer(){
      let model = this.store.createRecord('trainer', this.get('trainerParams'));
      this.set('trainerParams', {});
      model.save().then((trainer)=>{
        this.transitionToRoute('trainers.trainer.show', trainer);
      });
    }
  }
});
