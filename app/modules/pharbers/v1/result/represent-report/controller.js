import Controller from '@ember/controller';

export default Controller.extend({
	budgetTip: false,
	humanTip: false,
	tabLi: false,
	hidden(hiddenProperty) {
		if (this.get(hiddenProperty)) {
			this.set(hiddenProperty, true)
		}
	},
	init() {
		this._super(...arguments);
		this.columnsRepreReport = [{
			label: '代表名称',
			valuePath: 'representative',
			width: '150px',
			align: 'center',
		}, {
			label: '产品名称',
			valuePath: 'prod',
			width: '150px',
			align: 'center',
		}, {
			label: '当期销售额',
			valuePath: 'current_sales',
			width: '150px',
			align: 'center',
		}, {
			label: '销售增长',
			valuePath: 'sales_growth',
			width: '150px',
			align: 'center',
		}, {
			label: '指标',
			valuePath: 'target',
			width: '150px',
			align: 'center',
		}, {
			label: '指标达成率(%)',
			valuePath: 'achievement_rate',
			width: '150px',
			align: 'center',
		}, {
			label: '销售贡献率(%)',
			valuePath: 'contribution_rate',
			width: '150px',
			align: 'center',
		}, ];
		this.columnsRepreReportValue = [{
			'representative': 'repre name',
			'prod': 'prod 01',
			'current_sales': 8654,
			'sales_growth': 53,
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