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
    publicPath: "./"
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
        use:ExtractTextPlugin.extract({
          publicPath:"./../", //重置掉publicPath 采用相对路径
          use:[
          // {生产环境 需要CSS单独出来
          //   loader:"style-loader"
          // },
          {
            loader:"css-loader",
            options: { minimize: true }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: './postcss.config.js'
              },
              sourceMap: false
            }
          },
          {
            loader:"sass-loader"
          }
        ]
      })
      },
      {
        test: /\.css$/,
        use:[
          {
            loader:"style-loader"
          },          
          {
            loader:"css-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        use:[
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
            },
          },
        /*
          {
            loader:"url-loader",
            options:{
                limit:1000,
                name:"images/[name].[ext]"
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            }
          }*/
        ]
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
    //new webpack.HotModuleReplacementPlugin(),
    //提取公共commjs
    //new webpack.optimize.CommonsChunkPlugin("commons"),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
    new ExtractTextPlugin({
      filename:"css/[name].css",
      allChunks:true
    }),
    //压缩js 除$ jQuery
    new webpack.optimize.UglifyJsPlugin({
        mangle: {
            except: ['$', 'jQuery']
        },
        compress: {
            warnings: false
        }
    })
  ],
  devServer: {
    //contentBase: path.join(__dirname, "dist"),
    //compress: true,
    port: 8080,
    //inline:true,
    //hot:true,
    host:"0.0.0.0"
  }
  //devtool:"source-map"
}
