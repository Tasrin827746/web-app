import withBundleAnalyzer from "@next/bundle-analyzer";
import withPlugins from "next-compose-plugins";
import "./src/libs/Env";

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ["."],
  },
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    domains: ["i.ibb.co", "i.ibb.co.com", "i.postimg.cc"],
  },
  experimental: {
    turbo: {
      resolveAlias: {
        src: "./src",
      },
    },
  },
};

export default withPlugins([bundleAnalyzer], nextConfig);
