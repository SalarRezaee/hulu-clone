/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com", "image.tmdb.org" , "m.media-amazon.com"],
  },
};

module.exports = nextConfig;
