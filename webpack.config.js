var htmlWebpackPlugin = require('html-webpack-plugin');
var path = requier('path');
module.exports = {
	context:__dirName,
	entry:{
		page01:'./src/script/main.js',
		page02:['./src/script/main.js','./src/script/a.js']
	},
	output:{
		path:'./dist',
		filename:'js/[name]-[chunkhash].bundle.js'

	},
	plugins:[
		new htmlWebpackPlugin({
			template:'helloworld.html',
			inject:'<!--a bg-->'
		})
	]，
	// loader？importLoader  引入时候处理
	module:{
		loaders:[{
			test:/\.css$/,
			loader:'style-loader!css-loader？importLoader = 1!postcss-loader'
		}]
	},
	postcss:()=>{
		return [require("autoprefixer")]
		
	}
}