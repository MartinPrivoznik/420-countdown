/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "420-countdown.privoznik.dev" }],
        destination: "https://420-countdown.com/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
