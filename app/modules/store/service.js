import DS from 'ember-data';

export default DS.Store.extend({
    adapter:'pharbers-adapter',
    init() {
        this._super(...arguments)
        window.console.info("DS.Store")
    },

    queryObject(type, query) {
        // debugger
        const store = this;
        const typeClass = store.modelFor(type);
        const adapter = store.adapterFor('pharbers-adapter');
        const serializer = store.serializerFor(type);
        const url = adapter.buildURL(type);
        const ajaxPromise = adapter.ajax(url, 'POST', { data: JSON.stringify(query) });

        return ajaxPromise.then(function(rawPayload) {
            let extractedPayload = serializer.extract(store, typeClass, rawPayload, 'query');
            return store.push(typeClass, extractedPayload);
        });
    }

});












// const option = {
//     method: 'POST',
//     dataType: "json",
//     cache: false,
//     data: JSON.stringify(query),
//     contentType: "application/json,charset=utf-8",
//     Accept: "application/json,charset=utf-8",
// }
// const ajaxPromise = this.get('ajax').request(type, option);
