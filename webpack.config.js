/**
 * Created by shawnsandy on 5/2/15.
 */
/**
 * Created by shawnsandy on 3/19/15.
 */

var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin({
    filename: 'libs.js',
    minChunks: 2
});

module.exports = {
    entry: {
        reactIconset: './react-iconsets',
        svgIcons: './svg-icons',
        //sample: './sample'
    },
    output: {
        path: './build/',
        filename: '[name].min.js',
        publicPath: './'
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