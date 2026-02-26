let path = require("path");
let nodeExternals = require("webpack-node-externals");
module.exports = {
  target: "node", // fs path
  mode: "development",
  entry: "./src/server/index.js",
  output: {
    filename: "server_bundle.js",
    path: path.resolve(__dirname, "../build/server"),
  },
  externals: [nodeExternals()], // 排除 node_module 中的包
};
