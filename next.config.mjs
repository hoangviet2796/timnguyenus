/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/timnguyenus",
  output: "export",
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    loader: "custom",
    loaderFile: "./loader.js",
  },
};

export default nextConfig;
