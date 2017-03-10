




module.exports = {
    entry: __dirname + "/main.js",
    output: {
        path: __dirname + "/dist",
        publicPath: "dist/",
        filename: "build.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: "babel?presets[]=es2015", exclude: /mode_modules/ },
            { test: /\.vue$/, loader: "vue" }
        ]
    },
    devserver: {
        inline: true
    },
	resolve: {
        alias: {
            "vue$": "vue/dist/vue.common.js"
        }
    },	
	vue: {
        loaders: {
            css: "style!css!autoprefixer"
        },
		postcss: [
			require('autoprefixer')({
				browsers: ['last 20 versions']
			})
		]
    },
	babel: {
        presets: ['es2015']
    }
}



