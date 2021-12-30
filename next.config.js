/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["strapi.peaklinems.de", "static-cdn.jtvnw.net"],
    formats: ["image/webp"],
  },
};
