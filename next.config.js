/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // srr: true,
  images: {
    domains: ["localhost", "yogobe.23video.com"],
  },
};

module.exports = nextConfig;

// module.exports = {
//   images: {
//     domains: ["localhost", "yogobe.23video.com"],
//   },
// };
