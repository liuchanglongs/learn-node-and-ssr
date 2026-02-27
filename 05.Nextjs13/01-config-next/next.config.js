/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // 启用严格模式, 辅助我们编写代码, 如果用到了过时的函数 方法 和 属性,会提示已过期
  // 配置环境变量 process.env
  env: {
    PORT: 9999,
    NEXT_PUBLIC_BASE_URL: "http://localhost:9999",
  },
  // 替换Babel + Terser
  // swcMinify: true, // swc -> speedy web compiler  Rust-base -> Babel + Terser
  // basePath: "/music", // 给网站添加一个路径前缀
};

module.exports = nextConfig;
