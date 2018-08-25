import HTMLWebpackPlugin from 'html-webpack-plugin';

let HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/app/index.html', //Filepath to current HTML file
    filename: 'index.html', //Name of newly created HTML file
    inject: 'body'      //Either head or body. Tells where to put Script
});

export default {
    mode: 'none',
    entry: __dirname + '/app/index.js', //The file Webpack will transform
    module: {
        rules: [                   //Transformations to be performed on code
            {
                test: /\.js$/,          //What entry will be affected
                exclude: /node_modules/,//Files to exclude
                loader: 'babel-loader'  //What transformation to perform
            }
        ]
    },
    plugins: [HTMLWebpackPluginConfig], //Whatever plugin you may be using
    output: {                   //What Webpack should do with transformed file
        filename: 'transformed.js', //Name of transformed file
        path: __dirname + '/build'  //File path of transformed file
    }
};
