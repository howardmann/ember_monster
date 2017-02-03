import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  monsters: DS.hasMany('monster'),
  trainers: DS.hasMany('trainer')  
});
