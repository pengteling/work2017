const webpack = require("webpack")
const path=require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
module.exports={
  entry:{
    "index":"./src/index.js"
  },
  output:{
    path:path.resolve(__dirname ,"./dist"),
    filename:"js/[name].js",
    //publicPath: "./"
  },
  module:{
    rules:[
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, "./node_modules/"),
        include: path.resolve(__dirname, "./src/"),
        use: {
          loader: "babel-loader",
          options:{
            presets: ['env']
             //presets: ['es2015','react']

          }
        }

      },
      {
        test: /\.html$/,
        use:{
          loader:"html-loader"
        }
      },
      {
        test: /\.scss$/,
        use:[
          {
            loader:"style-loader"
          },
          {
            loader:"css-loader",
            options:{sourceMap:true}
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: './postcss.config.js'
              },
              sourceMap: true
            }
          },
          {
            loader:"sass-loader",
            options:{
              sourceMap:true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use:[
          {
            loader:"style-loader"
          },          
          {
            loader:"css-loader"
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        use:{
          loader:"url-loader",
          options:{
              limit:1000,
              name:"images/[name].[ext]"
          }
        }
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      filename: "index.html",
      template:"./src/index.html",
      //inject:'head'
      inject:"body"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
    }),
    new ExtractTextPlugin({
      filename:"css/[name].css",
      allChunks:true
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    historyApiFallback: true,
    //compress: true,
    port: 8080,
    inline:true,
    hot:true,
    host:"0.0.0.0"
  },
  devtool:"source-map"
}
