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

		this.columnsRepre = [{
			label: '代表名称',
			valuePath: 'representative',
			width: '90px',
			align: 'center',
		}, {
			label: '负责指标',
			valuePath: 'target',
			width: '90px',
			align: 'center',
		}, {
			label: '销售额',
			valuePath: 'current_sales',
			width: '90px',
			align: 'center',
		}, {
			label: '指标达成(%)',
			valuePath: 'indicator_achievement',
			width: '90px',
			align: 'center',
		}, {
			label: '预算比例(%)',
			valuePath: 'target_rate',
			width: '80px',
			align: 'center',
		}, {
			label: '销售贡献率(%)',
			valuePath: 'contribution_rate',
			width: '90px',
			align: 'center',
		}, {
			label: '工作天数',
			valuePath: 'workdays',
			width: '90px',
			align: 'center',
		}, {
			label: '奖金',
			valuePath: 'reward',
			width: '90px',
			align: 'center',
		}, {
			label: '能力值1',
			valuePath: 'ability',
			width: '90px',
			align: 'center',
		}, {
			label: '能力值变化',
			valuePath: 'ability_change',
			width: '90px',
			align: 'center',
		}, ];
		this.columnsRepreValue = [{
			'representative': 'representative',
			'target': 5735,
			'current_sales': 8654,
			'indicator_achievement': 53,
			'target_rate': 15,
			'contribution_rate': 57,
			'workdays': 56,
			'reward': 32,
			'ability': 56865,
			'ability_change': '+3',
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