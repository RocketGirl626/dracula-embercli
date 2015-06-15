import DS from 'ember-data';

console.log('hi');

export default DS.RESTAdapter.reopen({
  host: 'http://epicodus.com',
  namespace: 'api'
});
