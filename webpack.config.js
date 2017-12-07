const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src') + '/app/index.js',

    plugins: [
        new CleanWebpackPlugin(['dist']),
    ],
    output: {
        path: path.resolve(__dirname, 'dist') + '/app',
        filename: 'bundle.js',
        publicPath: '/app/'
    },

    module:{
        loaders: [
            {
                test: /\.js$/,
                // alternatively
                // exclude: /(node_modules)/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader',
                query: {
                    presets: [
                        'es2015',
                        'react'
                    ]
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
};
