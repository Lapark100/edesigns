/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true, // Ensure app router is enabled
    },
    trailingSlash: false, // Ensures clean URLs
  };
  
  export default nextConfig;