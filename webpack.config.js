/**
 * Created by shawnsandy on 5/2/15.
 */
/**
 * Created by shawnsandy on 3/19/15.
 */

var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('libs.js');

module.exports = {
    entry: "./index",
    output: {
        path: './build/',
        filename: "svg-iconsets.js"
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loader: 'jsx-loader?harmony' },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
            { test: /\.css$/, loader: 'style-loader!css-loader'},
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },
    resolve: {
        extensions: ['', '.js', '.json', '.jsx']
    },
    plugins: [commonsPlugin]
}