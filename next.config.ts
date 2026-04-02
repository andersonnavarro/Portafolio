import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Portafolio",
  assetPrefix: "/Portafolio/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;