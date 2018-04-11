import DS from 'ember-data';

export default DS.Model.extend({
    // list: DS.attr('array')
    status: DS.attr('string'),
    result: DS.attr('object-transform')
});
