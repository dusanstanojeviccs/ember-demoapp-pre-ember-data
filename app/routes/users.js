import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return $.getJSON('https://jsonplaceholder.typicode.com/users');
	}
});