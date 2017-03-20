var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
console.log(__dirname);
module.exports = {
    // context:__dirname,
    entry: './src/app.js',
    output: {
        path: './dist',
        filename: 'js/[name]-[chunkhash].bundle.js'

    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ],
    //loader？importLoader  引入时候处理
    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                ],
            }]
    }
}
;