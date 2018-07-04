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
		this.budget = {
			'total': 800000,
			'used': 60000,
			'percentage': 75,
		};
		this.manpower = [{
			'name': '代表一',
			'total': 30,
			'used': 20,
			'percentage': 67,
		}, {
			'name': '代表二',
			'total': 30,
			'used': 29,
			'percentage': 96,
		}, {
			'name': '代表三',
			'total': 30,
			'used': 20,
			'percentage': 67,
		}, {
			'name': '代表四',
			'total': 30,
			'used': 15,
			'percentage': 50,
		}, {
			'name': '代表五',
			'total': 30,
			'used': 10,
			'percentage': 33,
		}];
		this.hospital = [{
			'hospid': '111',
			'name': '中日医院',
			'level': '综合/三甲', // 类型/等级
			'department': '皮肤科', //特色科室
			'bed': 1000, // 病床数量
			'outpatient': 1234545, // 门诊人次/年
			'surgery': 1000, // 手术台数/年

			'representive': {
				'name': '校长',
				'avatar': '/assets/images/hosp_seller.png'
			}, // 负责代表
			'medicine': [{
				'name': '口服抗生素', // 药品名称
				'potential': '54,561,334', // 药品潜力
				'previoussales': '554,687', //上期销售额
				'contributionrate': '5%', // 贡献率
				'share': '12%' //份额
			}]
		}, {
			'hospid': '222',
			'name': '皇家医院',
			'level': '综合/三甲', // 类型/等级
			'department': '皮肤科', //特色科室
			'bed': 1000, // 病床数量
			'outpatient': 1234545, // 门诊人次/年
			'surgery': 1000, // 手术台数/年
			'representive': {
				'name': '校长',
				'avatar': '/assets/images/hosp_seller.png'
			}, // 负责代表
			'medicine': [{
				'name': '口服抗生素', // 药品名称
				'potential': '54,561,334', // 药品潜力
				'previoussales': '554,687', //上期销售额
				'contributionrate': '5%', // 贡献率
				'share': '12%' //份额
			}]
		}, {
			'hospid': '333',
			'name': '中美医院',
			'level': '综合/三甲', // 类型/等级
			'department': '皮肤科', //特色科室
			'bed': 1000, // 病床数量
			'outpatient': 1234545, // 门诊人次/年
			'surgery': 1000, // 手术台数/年
			'representive': {
				'name': '校长',
				'avatar': '/assets/images/hosp_seller.png'
			}, // 负责代表
			'medicine': [{
				'name': '口服抗生素', // 药品名称
				'potential': '54,561,334', // 药品潜力
				'previoussales': '554,687', //上期销售额
				'contributionrate': '5%', // 贡献率
				'share': '12%' //份额
			}]
		}];
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