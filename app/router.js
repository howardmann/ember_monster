import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('monsters', function() {
    this.route('monster', {
      path: ':monster_id'
    }, function() {
      this.route('edit');
    });
    this.route('new');
  });
  this.route('planets', function() {
    this.route('planet', {
      path: ':planet_id'
    }, function() {
      this.route('edit');
    });
    this.route('new');
  });
  this.route('trainers', function() {
    this.route('trainer', {
      path: ':trainer_id'
    }, function() {
      this.route('show');
      this.route('edit');
    });
    this.route('new');
  });
});

export default Router;
