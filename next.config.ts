import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/pokedev",
  assetPrefix: "/pokedev/"
};

export default nextConfig;
