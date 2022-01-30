/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["strapi.peaklinems.de", "static-cdn.jtvnw.net", "peaklinems.de"],
    formats: ["image/webp"],
  },
};
