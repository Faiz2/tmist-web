import DS from 'ember-data';
import { singularize } from 'ember-inflector';
//RESTAdapter //singularize(this.buildURL(modelName))
export default DS.RESTAdapter.extend({
    init() {
        this._super(...arguments)
    },
    headOpt: function(query) {
        return {
            dataType: 'json',
            contentType: 'application/json,charset=utf-8',
            Accept: 'application/json,charset=utf-8',
            data: query
        }
    },
    defaultSerializer: '-default',
    host: 'http://127.0.0.1:9000'
    // ,queryObject(modelName, query) {
    //     console.info(123)
    //     return this.ajax(this.buildURL(modelName),
    //                     'POST',
    //                     this.get('headOpt')(query));
    //
    // }

});
