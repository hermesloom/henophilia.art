import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/together",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
