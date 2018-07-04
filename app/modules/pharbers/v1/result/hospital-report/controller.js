import Controller from '@ember/controller';

export default Controller.extend({
	budgetTip: false,
	humanTip: false,
	tabLi:false,
	targetIncrease: 0,
	budget: 0,
	columnsHospital: [{
		label: '医院名称',
		valuePath: 'time',
		width: '90px',
		align: 'center',

	}, {
		label: '产品名词',
		valuePath: 'representative',
		width: '90px',
		align: 'center',
	}, {
		label: '市场潜力',
		valuePath: 'timemanagement',
		width: '90px',
		align: 'center',

	}, {
		label: '市场增长',
		valuePath: 'budgetallocation',
		width: '90px',
		align: 'center',
	}, {
		label: '当期销售额',
		valuePath: 'budgetratio',
		width: '90px',
		align: 'center',
	}, {
		label: '销售增长',
		valuePath: 'indicator',
		width: '90px',
		align: 'center',
	}, {
		label: 'EV值',
		valuePath: 'growth',
		width: '90px',
		align: 'center',
	}, {
		label: '份额',
		valuePath: 'achievementrate',
		width: '90px',
		align: 'center',
	},{
		label: '份额增长%',
		valuePath: 'trate',
		width: '90px',
		align: 'center',
	},
	{
		label: '指标',
		valuePath: 'aaa',
		width: '90px',
		align: 'center',
	},
	{
		label: '指标达成率',
		valuePath: 'bbb',
		width: '90px',
		align: 'center',
	},
	{
		label: '销售贡献率',
		valuePath: 'ccc',
		width: '90px',
		align: 'center',
	},
],
	columnsHospitalValue: [{
		time: '产品一',
		representative: '4,1721',
		timemanagement: '12%',
		budgetallocation: '4,1641',
		budgetratio: '12%',
		indicator: '100%',
		growth: '12%',
		achievementrate: '0%',
		trate:'234,321',
		aaa:'50%',
		bbb:'12%',
		ccc:'1'

	},{
		time: '产品一',
		representative: '4,1721',
		timemanagement: '12%',
		budgetallocation: '4,1641',
		budgetratio: '12%',
		indicator: '100%',
		growth: '12%',
		achievementrate: '0%',
		trate:'234,321',
		aaa:'50%',
		bbb:'12%',
		ccc:'1'

	},{
		time: '产品一',
		representative: '4,1721',
		timemanagement: '12%',
		budgetallocation: '4,1641',
		budgetratio: '12%',
		indicator: '100%',
		growth: '12%',
		achievementrate: '0%',
		trate:'234,321',
		aaa:'50%',
		bbb:'12%',
		ccc:'1'

	},{
		time: '产品一',
		representative: '4,1721',
		timemanagement: '12%',
		budgetallocation: '4,1641',
		budgetratio: '12%',
		indicator: '100%',
		growth: '12%',
		achievementrate: '0%',
		trate:'234,321',
		aaa:'50%',
		bbb:'12%',
		ccc:'1'

	},
],
	hidden(hiddenProperty) {
		if (this.get(hiddenProperty)) {
			this.set(hiddenProperty, true)
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
			console.log('human');
			this.toggleProperty('humanTip');
			this.hidden('budgetTip');
		},
		tab() {
			console.log('tabLi');
			this.toggleProperty('tabLi');
			this.hidden('tabLi');
		},
		changeTabs() {
			console.log(e)
		},
		changeMedicTab() {
			console.info('changeMedicTab')
		}
	}
});
