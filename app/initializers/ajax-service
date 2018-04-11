// import EmberObject from '@ember/object';
// import { inject } from '@ember/service';
// import RSVP from 'rsvp';
//
// const ajaxService = EmberObject.extend({
//     ajax: inject(),
//     url: null,
//     parameter: null,
//     // getRequest() {
//     //     return new RSVP.Promise((resolve, reject) => {
//     //         return this.get('ajax').request(url, { }).then((data) => {
//     //             return resolve({result: data});
//     //         }, () => {
//     //             return reject("Access Error");
//     //         });
//     //     });
//     // },
//     getJSON() {
//         return new RSVP.Promise((resolve, reject) => {
//             return this.get('ajax').request(this.get('url')).then((data) => {
//                 return resolve({result: data});
//             }, () => {
//                 return reject("Access Error");
//             });
//         });
//     },
//     postJSON() {
//         new RVSP.Promise((resolve, reject) => {
//             return this.get('ajax').request(this.get('url'), {
//                 method: 'POST',
//                 dataType: "json",
//                 cache: false,
//                 data: JSON.stringify(this.get('parameter')),
//                 contentType: "application/json,charset=utf-8",
//                 Accept: "application/json,charset=utf-8",
//             }).then((data) => {
//                 return resolve({resule: data});
//             },() => {
//                 return reject("Access Error");
//             })
//         });
//     }
// });
//
// export function initialize(application) {
//     application.register('service:ajax-service', ajaxService, /*{ instantiate: false }*/ );
//     application.inject('route', 'ajax-service', 'service:ajax-service')
//   // application.inject('route', 'foo', 'service:foo');
// }
//
// export default {
//     name: 'ajax-service',
//     initialize
// };
