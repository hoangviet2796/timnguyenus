// import { withNextVideo } from "next-video/process";
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   basePath: "/timnguyenus",
//   output: "export",
//   reactStrictMode: true,
//   eslint: {
//     // Warning: This allows production builds to successfully complete even if
//     // your project has ESLint errors.
//     ignoreDuringBuilds: true,
//   },
//   images: {
//     loader: "custom",
//     loaderFile: "./loader.js",
//   },
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.(mp4|webm|ogg|mp3|wav|flac|aac|rtf|doc|docx)$/,
//       use: {
//         loader: "file-loader",
//         options: {
//           name: "static/media/[name].[hash].[ext]",
//           publicPath: "/_next/",
//         },
//       },
//     });
//     return config;
//   },
// };

// export default withNextVideo(nextConfig);
