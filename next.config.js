/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ["firebasestorage.googleapis.com", "shandonblack.netlify.app"],
    },
    target: "serverless",
};

module.exports = nextConfig;
