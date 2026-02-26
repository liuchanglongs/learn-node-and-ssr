let path = require("path");
let nodeExternals = require("webpack-node-externals");
let { VueLoaderPlugin } = require("vue-loader");
module.exports = {
  target: "node", // fs path
  mode: "development",
  entry: "./src/server/index.js",
  output: {
    filename: "server_bundle.js",
    path: path.resolve(__dirname, "../build/server"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
        },
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
  resolve: {
    // 添加了这些扩展名之后, 项目中导报如下的扩展名文件就不需要编写文件的后缀
    extensions: [".js", ".json", ".wasm", ".jsx", ".vue"],
  },
  externals: [nodeExternals()], // 排除 node_module 中的包
};
