const path = require('path'); // 路径处理模块 nodeJs基本包
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin') // html解析插件


module.exports = {
    entry: path.resolve(__dirname,"../src/main.js"), // 项目总入口js文件 __dirname表示当前文件的路径
     // 输出文件
     output: {
        path: path.resolve(__dirname, 'dist'), // 所有的文件都输出到dist/目录下
        filename: '[name].[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options:{
                    loaders:{
                        'scss':[
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader'
                        ],
                        'sass':[
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader?indentedSyntax'
                        ]
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
                // loader: 'css-loader!style-loader',
                // exclude: /node_modules/
            },
            //当项目中引入了scss之后，需要在这里进行添加一个scss代码识别
            {
                test: /\.scss$/, 
                use: ["style-loader",'css-loader','sass-loader']
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader"
            },

            {
                test: /\.style/,
                use: [
                    'style-loader',
                    'css-loader',
                    'stylus-loader'//这个loader依赖stylus这个包，所以装的时候还要安装这个stylus
                ]
            },
            
            //解析el的文件
            {
                test: /\.(woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url-loader', // 能够将图片转成base64代码直接写在js里面,依赖file-loader，所以在安装的时候不仅要装url-loader还要装file-loader
                options: {
                    name(file) {
                        if (process.env.NODE_ENV === 'development') {
                        return '[path][name].[ext]';
                        }
                        return '[hash].[ext]';
                    },
                    limit: 8192,
                    outputPath: "dist/images/"  
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(), // 最新版的vue-loader需要配置插件
        // 具体配置https://github.com/jantimon/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: process.env.NODE_ENV === "production" ? '../index.html' : "index.html", // 生成html文件的名字，默认为index.html
            template: 'index.html', // 当webpack自动生成html文件的时候，会基于某个模板来进行
            inject: "body", // 所有javascript资源将被放置在body元素的底部
            chunks: ["main"] // 只添加main.js/main.css
        }),
    ],
    // https://www.jianshu.com/p/62dc120d96d0
    // 使用eval打包源文件模块，在同一个文件中生成干净的完整的source map。这个选项可以在不影响构建速度的前提下生成完整的sourcemap，但是对打包后
    // 输出的JS文件的执行具有性能和安全的隐患。不过在开发阶段这是一个非常好的选项，但是在生产阶段一定不要用这个选项；
    devtool: '#eval-source-map', // 调试
    // 模块resolve的规则
    resolve: {
         // 配置路径别名，比如import Vue from 'vue/dist/vue.common.js'--> import Vue from 'vue'
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    devServer: {
        historyApiFallback: true, // 不跳转
        hot: true, // 热加载，不需要刷新页面就能加载出来
        inline: true, // 实时刷新
        stats: { colors: true } // 终端输出为彩色
    }
}
// 是否是生产环境
if (process.env.NODE_ENV === 'production') {
    //  module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
        'process.env': {
        NODE_ENV: '"production"'
        }
    }),
    new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compress: {
        warnings: false
        }
    }),
    new webpack.LoaderOptionsPlugin({
        minimize: true
    })
    ])
}