import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/team",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/team/",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/team/jeremy-meiss",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/team/jeremy-meiss/",
        destination: "/about",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
