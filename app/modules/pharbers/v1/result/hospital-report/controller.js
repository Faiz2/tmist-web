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
				label: '医院名称',
				valuePath: 'hospital',
				width: '90px',
				align: 'center',
			}, {
				label: '产品名称',
				valuePath: 'prod',
				width: '90px',
				align: 'center',
			}, {
				label: '市场潜力',
				valuePath: 'market_potential',
				width: '90px',
				align: 'center',

			}, {
				label: '市场增长(%)',
				valuePath: 'market_growth',
				width: '90px',
				align: 'center',
			}, {
				label: '当期销售额',
				valuePath: 'current_sales',
				width: '90px',
				align: 'center',
			}, {
				label: '销售增长',
				valuePath: 'sales_growth',
				width: '90px',
				align: 'center',
			}, {
				label: 'EV值(%)',
				valuePath: 'ev_value',
				width: '80px',
				align: 'center',
			}, {
				label: '份额(%)',
				valuePath: 'share',
				width: '90px',
				align: 'center',
			}, {
				label: '份额增长(%)',
				valuePath: 'share_growth',
				width: '90px',
				align: 'center',
			},
			{
				label: '指标',
				valuePath: 'target',
				width: '90px',
				align: 'center',
			},
			{
				label: '指标达成率(%)',
				valuePath: 'achievement_rate',
				width: '90px',
				align: 'center',
			},
			{
				label: '销售贡献率(%)',
				valuePath: 'contribution_rate',
				width: '90px',
				align: 'center',
			},
		];
		this.columnsHospitalValue = [{
			'hospital': 'hospital name',
			'prod': 'prod 01',
			'market_potential': 12456,
			'market_growth': 12,
			'current_sales': 8654,
			'sales_growth': 53,
			'ev_value': 15,
			'share': 56,
			'share_growth': 32,
			'target': 56865,
			'achievement_rate': 35,
			'contribution_rate': 57
		}];
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