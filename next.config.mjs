/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/timnguyenus",
  output: "export",
  reactStrictMode: true,
  images: {
    domains: ["github.com"],
    path: "https://hoangviet2796.github.io/timnguyenus",
  },
};

export default nextConfig;
