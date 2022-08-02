const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');
dotenv.config();
const { webpack } = require('webpack');

module.exports = {
    mode: 'development', // 또는 production
    resolve: {
        extensions: ['.jsx', '.js'] // a Webpack library that helps locate imported modules. 
    } ,
    entry: { //시작하는 파일 넣을 것
        app: ['./src/index.js']
    },
    // devServer: {
    //     proxy: {
    //         "/api": {
    //             target: "https://www.googleapis.com/",
    //             secure: false,
    //             changeOrigin: true,
                
    //           }
    //     }
    // },
    module: { //loaders
        rules: [
            {
              test: /\.css$/i,
              use: ["style-loader", "css-loader"],
              exclude: /node_modules/,
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                },
            }
          ],
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "./public/index.html")
      }),
      new webpack.DefinePlugin({
        "process.env": JSON.stringify(process.env),
      }),
    ],
    output: {
        path: path.resolve(__dirname, "docs"),
        filename: "app.js",
      },
};