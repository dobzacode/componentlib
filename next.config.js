/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["placehold.co"],
    loader: "default",
    dangerouslyAllowSVG: true,
  },
};

module.exports = nextConfig;
