'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
    // 判断是否需要sourceMaps
    let sourceMap = process.env.EMBER_ENV === 'production' ? 'false' : 'inline';
    console.info(sourceMap);
	let app = new EmberApp(defaults, {
        storeConfigInMeta: false,
        // SRI: {
        //   enabled: false
        // },
        fingerprint: {
          enabled: false
        },
		// Add options here
		// minifyCSS: {
		//   enabled: false
		// },
		// minifyJS: {
		//   enabled: false
		// },
		// cssModules: {
		// 	plugins: [
		// 		require('postcss-import'),
		// 		require('postcss-extend'),
		// 		require('postcss-cssnext'),
		// 		require('rucksack-css')({
		// 			alias: false,
		// 			hexRGBA: false,
		// 			fallbacks: true
		// 		})
		// 	]
		// },
		'ember-bootstrap': {
			'bootstrapVersion': 3,
			'importBootstrapFont': true,
			'importBootstrapCSS': true
		},
		sassOptions: {
            includePaths: [
                'node_modules/bootstrap-sass/assets/stylesheets',
                'node_modules/ember-power-select/app/styles',
                'node_modules/ember-basic-dropdown/app/styles'
            ]
		},
        babel: {
            sourceMaps: sourceMap
        }
	});
    app.import("vendor/echarts/echarts.js")
	return app.toTree();
};
