import Component from '@ember/component';
import {
	computed
} from '@ember/object';
import Table from 'ember-light-table';
// export default Component.extend({
// });
export default Component.extend({
	columns: computed(function() {
		return [{
			label: 'Id',
			valuePath: 'id',
			width: '150px'
		}, {
			label: 'Type',
			valuePath: 'type',
			width: '150px'
		}, {
			label: 'Hit-Points',
			valuePath: 'healthpoints',
			width: '150px'
		}];
	}),

	table: computed('model', function() {
		return new Table(this.get('columns'), this.get('model'));
	})

});