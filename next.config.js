/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    Images: {
        domains: ["https://google.com"],
    },
};

module.exports = nextConfig;
