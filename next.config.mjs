/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["tailnews.tailwindtemplate.net", "images.pexels.com"], // Add the allowed domain here
  },
};

export default nextConfig;
