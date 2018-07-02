import Route from '@ember/routing/route';

export default Route.extend({
	model() {
		return [{
			hospid: '111',
			name: '中日医院',
			style: '综合/三甲',
			keshi: '皮肤科',
			bed: 1000,
			perpeople: 1234545,
			pershoushu: 1000
		}, {
			hospid: '222',
			name: '皇家医院',
			style: '综合/其他',
			keshi: '泌尿科',
			bed: 1900,
			perpeople: 12356345,
			pershoushu: 700
		}, {
			hospid: '333',
			name: '中美医院',
			style: '其他/三甲',
			keshi: '外科',
			bed: 1500,
			perpeople: 167545,
			pershoushu: 1900
		}]

	}
});