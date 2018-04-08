import DS from 'ember-data';

export default DS.JSONSerializer.extend({
    primaryKey: 'id',
    normalizeResponse(store, model, payload, id, type) {
        // payload = payload.result;
        return this._super(store, model, payload, id, type)
    },
    extractId(model, hash) {
        return "1";
    }
});
