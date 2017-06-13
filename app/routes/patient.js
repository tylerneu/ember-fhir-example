import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.query('Encounter', { "patient": `Patient/${params.patient_id}` });
  }
});
