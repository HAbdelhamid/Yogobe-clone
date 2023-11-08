/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // srr: true,
  images: {
    domains: [
      "localhost",
      "yogobe.23video.com",
      "devenv.yogobe.com",
      "yogobe-assets-shrine-staging.s3.eu-north-1.amazonaws.com",
    ],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: false,
  },
};

module.exports = nextConfig;

// module.exports = {
//   images: {
//     domains: ["localhost", "yogobe.23video.com"],
//   },
// };
