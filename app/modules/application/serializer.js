import DS from 'ember-data';
import { typeOf } from '@ember/utils';
import {
    query,
} from '../common/serializer-split';

export default DS.JSONSerializer.extend({
    primaryKey: 'id',
    normalize(modelClass, hash) {
        let data = null;
        if (hash) {
            this.normalizeUsingDeclaredMapping(modelClass, hash);

            if (typeOf(hash.links) === 'object') {
                this.normalizeUsingDeclaredMapping(modelClass, hash.links);
            } else if (typeOf(hash.result) === 'object') {
                this.normalizeUsingDeclaredMapping(modelClass, hash.result);
            }

            data = {
                id: this.extractId(modelClass, hash),
                type:   modelClass.modelName,
                attributes: this.extractAttributes(modelClass, hash),
                relationships:  this.extractRelationships(modelClass, hash)
            };
            this.applyTransforms(modelClass, data.attributes);
        }

        return { data };
    },
    normalizeResponse(store, modelClass, payload, id, requestType) {
        switch(requestType) {
            case 'queryObject':
                return query(this, modelClass, payload);
            case 'queryMultipleObject':
                window.console.warn('没有实现！');
                return null;
            default:
                return this._super(store, modelClass, payload, id, requestType);
                // return payload.reduce((documentHash, item) => {
                //     let { data, included } = this.normalize(modelClass, item);
                //     documentHash.included.push(...included);
                //     documentHash.data.push(data);
                //     return documentHash;
                // }, { data: [], included: [] });
        }
    },
    extractId(model, hash) {
        return hash.id || -1;
    }
});

/**
 * 暂时废弃Code（妈的白重写了）
 */
// export default DS.Serializer.extend({
//     normalize(modelClass, hash) {
//         let data = {
//             id: hash.id || -1,
//             type: modelClass.modelName,
//             attributes: hash
//         };
//         return {data: data};
//     },
//
//     normalizeResponse(store, modelClass, payload, id, requestType) {
//         switch(requestType) {
//             case 'queryObject':
//                 return query(this, modelClass, payload);
//                 break;
//             default:
//                 return payload.reduce((documentHash, item) => {
//                     let { data, included } = this.normalize(modelClass, item);
//                     documentHash.included.push(...included);
//                     documentHash.data.push(data);
//                     return documentHash;
//                 }, { data: [], included: [] });
//         }
//     },
//     serialize(snapshot, options) {
//         let json = {
//             id: snapshot.id
//         };
//
//         snapshot.eachAttribute((key, attribute) => {
//             json[key] = snapshot.attr(key);
//         });
//
//         snapshot.eachRelationship((key, relationship) => {
//             if (relationship.kind === 'belongsTo') {
//                 json[key] = snapshot.belongsTo(key, { id: true });
//             } else if (relationship.kind === 'hasMany') {
//                 json[key] = snapshot.hasMany(key, { ids: true });
//             }
//         });
//         return json;
//     },
//
//     extractRelationship(relationshipModelName, relationshipHash) {
//         let modelClass = this.store.modelFor(relationshipModelName);
//         let relationshipSerializer = this.store.serializerFor(relationshipModelName);
//         return relationshipSerializer.normalize(modelClass, relationshipHash);
//     }
// });
