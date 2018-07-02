import Route from '@ember/routing/route';

export default Route.extend({
	actions: {
		simulation() {
			this.transitionTo('pharbers.v1.hospital')
		}
	}
});