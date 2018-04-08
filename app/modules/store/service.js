import DS from 'ember-data';

export default DS.Store.extend({
    adapter:'pharbers-adapter',

    headOpt: function(query) {
        return {
            dataType: 'json',
            contentType: 'application/json,charset=utf-8',
            Accept: 'application/json,charset=utf-8',
            data: query
        }
    },
    init() {
        this._super(...arguments)
        window.console.info("The Custom DS.Store Init()")
    },

    queryObject(modelName, query) {
        const store = this;
        const adapter = store.adapterFor(this.get('adapter'));//PharbersStore(this, modelName);
        const serializer = store.serializerFor(modelName);
        const url = adapter.buildURL(modelName);
        // let ajaxPromise;//= adapter.queryObject(modelName, query) ? adapter.queryObject(modelName, query) : adapter.ajax(url, 'POST', this.get('headOpt')(query))
        // try {
        //     ajaxPromise = adapter.queryObject(modelName, query)
        // } catch(e) {
        //     ajaxPromise = adapter.ajax(url, 'POST', this.get('headOpt')(query))
        // }
        //
        let ajaxPromise = typeof(adapter.queryObject) === "function" ? adapter.queryObject(modelName, query) : adapter.ajax(url, 'POST', this.get('headOpt')(query))
            // adapter.queryObject(modelName, query) ||
            // adapter.ajax(url, 'POST', this.get('headOpt')(query));

        return ajaxPromise.then((data) => {
            return store.push(store.normalize(modelName, data))
        }, (result)=> {
            window.console.error(result.message);
        });

    }

});
