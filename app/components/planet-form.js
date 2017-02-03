import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    componentAction(model){
      // Calls the controller action that it was given in this case in the new template when calling the component:
      // For the NEW form
      // {{planet-form model=newModel componentAttr=(action "controllerCreate")}}
      // For the EDIT form
      // {{planet-form model=model componentAttr=(action "controllerUpdate")}}
      // We pass the model and its associated params back up the chain
      this.attrs.componentAttr(model);
    }
  }
});
