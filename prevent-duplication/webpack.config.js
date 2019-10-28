const path = require('path')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
module.exports = {
    entry: {
        home: path.resolve(__dirname,'src/js/index.js'),
        contact: path.resolve(__dirname,'src/js/contact.js'),
    },
    mode: 'production',
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: 'js/[name].js',
    },
    devServer:{
        hot: true,
        open: true,
        port: 9000,
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                use:'babel-loader',
                exclude: /node_modules/, //No aplicar babel loader
            },
            {
                test: /\.css$/,
                use:[
                    'style-loader',
                    {
                        loader:'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    'postcss-loader',
                ]
            },
            {
                test: /\.less$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.scss$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.styl$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            },
            {
                test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 90000 // 90 kylobites
                    }
                }
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title:'Webpack dev server',
            template: path.resolve(__dirname,'index.html'),
        }),
    ],
    optimization:{
        splitChunks:{
            chunks: 'all', //Modulos a los q se aplica
            minSize: 0, // tamano minimo de los archivos para incluir en el modulo con el codigo comun
            name: 'commons' //Nombre del modulo donde se va agrupar el codigo que se repite en toda la aplicacion
        }
    }
}