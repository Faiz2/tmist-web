import Component from '@ember/component';
import {
	computed
} from '@ember/object';
import Table from 'ember-light-table';

export default Component.extend({
	selfheight: '180px',
	columns: computed('columns', function() {
		return [{
			label: '商品名',
			valuePath: 'id',
			width: '100px',
			align: 'center',
			className: 'testname',
			sortable: true,
			sorted: true,
		}, {
			label: '类别',
			valuePath: 'type',
			width: '100px',
			align: 'center',

		}, {
			label: '治疗领域',
			valuePath: 'treatmentarea',
			width: '100px',
			align: 'center',

		}, {
			label: '上市时间',
			valuePath: 'selltime',
			width: '80px',
			align: 'center',
		}, {
			label: '医保类型',
			valuePath: 'medicalinsurance',
			width: '80px',
			align: 'center',
		}, {
			label: '研发类型',
			valuePath: 'development',
			width: '80px',
			align: 'center',
		}, {
			label: '公司考核价',
			valuePath: 'companyprice',
			width: '100px',
			align: 'center',
		}];
	}),

	table: computed('model', function() {
		return new Table(this.get('columns'), this.get('model'));
	}),
	actions: {
		sortByColumn(column) {

		}
	}

});