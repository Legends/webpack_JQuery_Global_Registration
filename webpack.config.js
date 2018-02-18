// ++++++++++++++++++++   MULTIPLE OUTPUT FILES   

const {
    join
} = require('path')

const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = env => {
    return {


        entry: join(__dirname, 'src/index'),
        plugins: [

            new HTMLWebpackPlugin({
                title: 'Bundle-Test'
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'commonChunks',
                children: true,
                filename: 'common.js'
            })
        ],

        devtool: 'inline-source-map',

        output: {
            path: join(__dirname, 'dist'),
            filename: 'bundle.js',
            chunkFilename: '[name].bundle.js',
            publicPath: '/dist/',
            devtoolModuleFilenameTemplate: '[absolute-resource-path]'
        },

        resolve: {
            extensions: ['.ts', '.js', '.json', '.css', '.less', '.scss', '.saas'],
            alias: {
                "jquery": "jquery/src/jquery"
            }
        },

        module: {
            rules: [{
                    test: /\.ts$/,
                    loader: 'ts-loader'
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: [
                        'file-loader'
                    ]
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/',
                            publicPath: '../'
                        }
                    }]
                },
                {
                    test: /\.(csv|tsv)$/,
                    use: [
                        'csv-loader'
                    ]
                },
                {
                    test: /\.xml$/,
                    use: [
                        'xml-loader'
                    ]
                }
            ]
        }
    }
}