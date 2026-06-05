import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/websites/roasfund",
  images: {
    unoptimized: true,
  },
  output: "export",
};

export default nextConfig;
