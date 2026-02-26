let { VueLoaderPlugin } = require("vue-loader");
module.exports = {
  mode: "development",
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
};
