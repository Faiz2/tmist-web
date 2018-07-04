import Controller from '@ember/controller';

export default Controller.extend({
	budgetTip: false,
	humanTip: false,
	tabLi: false,
	targetIncrease: 0,
	budget: 0,

	hidden(hiddenProperty) {
		if (this.get(hiddenProperty)) {
			this.set(hiddenProperty, true)
		}
	},
	init() {
		this._super(...arguments);
		this.columnsHospital = [{
				label: '产品名称',
				valuePath: 'time',
				width: '100px',
				align: 'center',

			}, {
				label: '市场销售额',
				valuePath: 'representative',
				width: '100px',
				align: 'center',
			}, {
				label: '市场增长',
				valuePath: 'timemanagement',
				width: '100px',
				align: 'center',

			}, {
				label: '当期销售额',
				valuePath: 'budgetallocation',
				width: '100px',
				align: 'center',
			}, {
				label: '销售增长',
				valuePath: 'budgetratio',
				width: '100px',
				align: 'center',
			}, {
				label: 'EV值',
				valuePath: 'indicator',
				width: '100px',
				align: 'center',
			}, {
				label: '份额',
				valuePath: 'growth',
				width: '100px',
				align: 'center',
			}, {
				label: '份额增长%',
				valuePath: 'achievementrate',
				width: '100px',
				align: 'center',
			}, {
				label: '指标',
				valuePath: 'trate',
				width: '100px',
				align: 'center',
			},
			{
				label: '指标达成率',
				valuePath: 'aaa',
				width: '100px',
				align: 'center',
			},
			{
				label: '销售贡献率',
				valuePath: 'bbb',
				width: '100px',
				align: 'center',
			}
		];
		this.columnsHospitalValue = [{
			time: '产品一',
			representative: '4,1721',
			timemanagement: '12%',
			budgetallocation: '4,1641',
			budgetratio: '12%',
			indicator: '100%',
			growth: '12%',
			achievementrate: '0%',
			trate: '234,321',
			aaa: '50%',
			bbb: '12%',

		}, {
			time: '产品一',
			representative: '4,1721',
			timemanagement: '12%',
			budgetallocation: '4,1641',
			budgetratio: '12%',
			indicator: '100%',
			growth: '12%',
			achievementrate: '0%',
			trate: '234,321',
			aaa: '50%',
			bbb: '12%',

		}, {
			time: '产品一',
			representative: '4,1721',
			timemanagement: '12%',
			budgetallocation: '4,1641',
			budgetratio: '12%',
			indicator: '100%',
			growth: '12%',
			achievementrate: '0%',
			trate: '234,321',
			aaa: '50%',
			bbb: '12%',

		}, {
			time: '产品一',
			representative: '4,1721',
			timemanagement: '12%',
			budgetallocation: '4,1641',
			budgetratio: '12%',
			indicator: '100%',
			growth: '12%',
			achievementrate: '0%',
			trate: '234,321',
			aaa: '50%',
			bbb: '12%',

		}, ];
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
		tab() {
			// console.log('tabLi');
			this.toggleProperty('tabLi');
			this.hidden('tabLi');
		},

	}
});