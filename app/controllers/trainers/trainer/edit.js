import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updateTrainer(model){
      model.save().then((trainer)=>{
        this.transitionToRoute('trainers.trainer.show', trainer);
      });
    }
  }
});
