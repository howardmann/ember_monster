import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    updateMonster(model){
      var self = this;
      // Find planet from selected form id and SET to monster
      let planetId = $('select option:selected').val();
      self.currentModel.monster.set('planetId', planetId);

      // Save monster model to DB and then transition to show page after fetching new monster
      model.save().then(function(monster){
        self.transitionTo('monsters.monster', monster);
      });
    }
  },
  model(){
    return Ember.RSVP.hash({
      monster: this.modelFor('monsters.monster'),
      planets: this.store.findAll('planet')
    })
  }
});
