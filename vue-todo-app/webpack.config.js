const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
require('@babel/polyfill')

module.exports = {
    entry: {
        app: [
            '@babel/polyfill',
            path.join(__dirname, 'main.js')
        ]
    },

    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use:[
                    'vue-style-loader',
                    'css-loader'
                ] 
                
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}