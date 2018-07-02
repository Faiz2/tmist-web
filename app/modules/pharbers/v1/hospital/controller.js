import Controller from '@ember/controller';

export default Controller.extend({
	budgetTip: false,
	humanTip: false,
	hidden(hiddenProperty) {
		if (this.get(hiddenProperty)) {
			this.set(hiddenProperty, false)
		}
	},
	init() {
		this._super(...arguments);

	},
	actions: {
		// body
		budget() {
			// console.log('budget');
			this.toggleProperty('budgetTip');
			this.hidden('humanTip');
		},
		human() {
			// console.log('human');
			this.toggleProperty('humanTip');
			this.hidden('budgetTip');
		},
		hospDetail() {
			this.transitionToRoute('pharbers.v1.hosp-detail')
		}
	}
});