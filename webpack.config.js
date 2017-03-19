var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry:{
		page01:'./src/script/main.js',
		page02:['./src/script/main.js','./src/script/a.js']
	},
	output:{
		path:'./dist/js',
		filename:'[name]-[chunkhash].bundle.js'

	},
	plugins:[
		new htmlWebpackPlugin({
			template:'helloworld.html',
			inject:'<!--a bg-->'
		})
	]
}