import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  age: DS.attr('number'),
  description: DS.attr('string'),
  planetId: DS.attr('number'),
  planet: DS.belongsTo('planet')
});
