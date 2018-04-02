import Route from '@ember/routing/route';
import { inject } from '@ember/service'
// import baseAjax from '../Common/BaseAjax';

export default Route.extend({
    ajaxService: inject(),
    model() {
        let p = this.get('ajaxService')
        p.set("url", `//api.github.com/users`)
        console.info(p.get("url"))
        // baseAjax.create().getRequest();
        // baseAjax.create({
        //     url: `//api.github.com/users`,
        //     parameter: {
        //         condition: {
        //             userName: "Alex"
        //         },
        //         action: {
        //             name: "update",
        //             data: [
        //                 {name: "Alex", age: 24},
        //                 {name: "Alfred", age: 31}
        //             ]
        //         }
        //     }
        // }).postJSON();

        return {
            account: "Alex"
        }
    }
});
