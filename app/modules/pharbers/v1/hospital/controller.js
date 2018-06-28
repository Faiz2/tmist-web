import Controller from '@ember/controller';

export default Controller.extend({
	budgetTip: false,
	actions: {
		// body
		budget() {
			console.log('budget');
			this.toggleProperty('budgetTip')
		},
		human() {
			console.log('human');
		}
	}
});