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
		this.columnsResource = [{
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
			label: '分配代表',
			valuePath: 'representative',
			width: '90px',
			align: 'center',
		}, {
			label: '时间(%)',
			valuePath: 'time',
			width: '90px',
			align: 'center',
		}, {
			label: '预算分配',
			valuePath: 'representative',
			width: '90px',
			align: 'center',
		}, {
			label: '市场潜力',
			valuePath: 'market_potential',
			width: '90px',
			align: 'center',

		}, {
			label: '潜力增长(%)',
			valuePath: 'potential_growth',
			width: '90px',
			align: 'center',
		}, {
			label: '销售额',
			valuePath: 'current_sales',
			width: '90px',
			align: 'center',
		}, {
			label: '销售增长(%)',
			valuePath: 'sales_growth',
			width: '90px',
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
		}, {
			label: '销售贡献率(%)',
			valuePath: 'contribution_rate',
			width: '90px',
			align: 'center',
		}, ];
		this.columnsResourceValue = [{
			'hospital': 'hospital name',
			'prod': 'prod 01',
			'representative': 'laowang',
			'time': 12,
			'budget': 857654,
			'market_potential': 12456,
			'potential_growth': 12,
			'current_sales': 8654,
			'sales_growth': 53,
			'share': 56,
			'share_growth': 32,
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