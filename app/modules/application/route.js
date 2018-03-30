import Route from '@ember/routing/route';
import { inject } from '@ember/controller';

export default Route.extend({
    ajax: inject();
    model() {
        return {
            account: "Alex"
        }
    }
});
