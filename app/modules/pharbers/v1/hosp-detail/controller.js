import Controller from '@ember/controller';
// import {computed } from '@ember/object';
export default Controller.extend({
	budgetTip: false,
	humanTip: false,
	targetIncrease: 0,
	budget: 0,
	columnsHospital: [{
		label: '时间',
		valuePath: 'time',
		width: '80px',
		align: 'center',
		className: 'testname',
		sortable: true,
		sorted: true,
	}, {
		label: '负责代表',
		valuePath: 'representative',
		width: '80px',
		align: 'center',
	}, {
		label: '时间分配',
		valuePath: 'timemanagement',
		width: '80px',
		align: 'center',

	}, {
		label: '预算分配',
		valuePath: 'budgetallocation',
		width: '80px',
		align: 'center',
	}, {
		label: '预算比例',
		valuePath: 'budgetratio',
		width: '80px',
		align: 'center',
	}, {
		label: '指标设定',
		valuePath: 'indicator',
		width: '80px',
		align: 'center',
	}, {
		label: '指标增长',
		valuePath: 'growth',
		width: '80px',
		align: 'center',
	}, {
		label: '指标达成率',
		valuePath: 'achievementrate',
		width: '100px',
		align: 'center',
	}],
	columnsHospitalValue: [{
		time: '星期一',
		representative: '小三',
		timemanagement: '12天',
		budgetallocation: '5,000',
		budgetratio: '5,000',
		indicator: '50,000',
		growth: '1.23',
		achievementrate: '95%',
	}],
	hidden(hiddenProperty) {
		if (this.get(hiddenProperty)) {
			this.set(hiddenProperty, false)
		}
	},
	init() {
		this._super(...arguments);

	},
	actions: {
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
		changeTabs() {
			console.log(e)
		},
		changeMedicTab() {
			console.info('changeMedicTab')
		}
	}
});