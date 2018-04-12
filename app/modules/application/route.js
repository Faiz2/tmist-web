import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        // TODO: 这个是个Test
        let condition = {
            "condition": {
                "account": "alex",
                "password": "a"
            }
        };
        this.store.queryObject("query/users", condition).then((data) => {
            // let posts = this.store.peekAll('query/users');
            window.console.info(data);
            let posts = this.store.peekRecord('query/users', -1);
            window.console.info(posts.get('id'));
            // console.info(posts.content.map(item => item.id))
            // console.info(data)
        },() => {

        });

        return {
            account: "Alex"
        }
    }
});
