import Controller from '@ember/controller';
// import {computed } from '@ember/object';
export default Controller.extend({
	budgetTip: false,
	humanTip: false,
	baseInfo: true, // 基本信息显示与否
	news: false, // 医院新闻动态显示与否
	usePolicy: false, // 用药政策/理念 显示与否


	targetIncrease: 0,
	budget: 0,
	columnsHospital: [{
		label: '产品',
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
	},{
		time: '星期一',
		representative: '小三',
		timemanagement: '12天',
		budgetallocation: '5,000',
		budgetratio: '5,000',
		indicator: '50,000',
		growth: '1.23',
		achievementrate: '95%',
	},
],
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
		submit() {
			this.transitionToRoute('pharbers.v1.result.whole')
		},
		backHospList() {
			this.transitionToRoute('pharbers.v1.hospital')
		},
		changeTabsInfo() {
			this.set('baseInfo', true);
			this.set('news', false);
			this.set('usePolicy', false);
		},
		changeTabsNews() {
			this.set('baseInfo', false);
			this.set('news', true);
			this.set('usePolicy', false);
		},
		changeTabsPolicy() {
			this.set('baseInfo', false);
			this.set('news', false);
			this.set('usePolicy', true);
		},
		changeMedicTab() {
			console.info('changeMedicTab')
		}
	}
});
