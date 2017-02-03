import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deleteTrainer(model){
      if (confirm('Are you sure?')) {
        model.destroyRecord().then(() => {
          this.transitionToRoute('trainers');
        });
      } else {
        return;
      }
    }
  }
});
