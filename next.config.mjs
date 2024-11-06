/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // reactRefresh: false,
  // output: "export",
  images: {
    unoptimized: true,
  },

  async rewrites() {
    return [
      {
        source: "/api/(.*)",
        destination: "/api/$1",
      },
    ];
  },
};

export default nextConfig;
