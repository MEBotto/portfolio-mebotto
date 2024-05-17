/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  images: {
    // loader: "custom",
    // loaderFile: "./loader.ts",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;
