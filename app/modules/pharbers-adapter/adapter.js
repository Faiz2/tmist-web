import DS from 'ember-data';
import { singularize } from 'ember-inflector';
//RESTAdapter
export default DS.RESTAdapter.extend({

    defaultSerializer: '-default',
    host: 'http://127.0.0.1:9000',

    queryObject(store, type, query) {
        // this._super(...arguments)
        // debugger,
        console.info(123)
        let header = {
            dataType: 'json',
            contentType: 'application/json,charset=utf-8',
            Accept: 'application/json,charset=utf-8',
            data: query
        };
        return this.ajax(singularize(this.buildURL(type.modelName)), 'POST', header);
    }
});
