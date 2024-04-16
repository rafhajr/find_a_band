/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'encrypted-tbn2.gstatic.com' },
      { hostname: 'upload.wikimedia.org' },
      { hostname: 'encrypted-tbn1.gstatic.com' },
      { hostname: 'encrypted-tbn3.gstatic.com' },
      { hostname: 'encrypted-tbn0.gstatic.com' }
    ]
  }
};

export default nextConfig;
