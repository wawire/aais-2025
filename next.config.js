/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Add this line to enable static HTML export

  // Optional: Add trailing slash to URLs, e.g., /about/ instead of /about
  // trailingSlash: true, 

  // Optional: Configuration for next/image with static export
  // If you're using next/image, you'll likely need a custom loader
  // for static exports, as the default optimization requires a server.
  // For example, if you're hosting images on a CDN:
  images: {
    unoptimized: true, // Set to true if you don't need image optimization for static export
  
  },
};

module.exports = nextConfig;