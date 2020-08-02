const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: './src/script.js',
    output: {
        filename: 'all.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                    presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            },
        ]
    },
    devServer: {
        contentBase: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        })
    ]
}