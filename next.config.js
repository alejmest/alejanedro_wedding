/** @type {import('next').NextConfig} */

const repoName = 'alejanedro_wedding'
const nextConfig = {
    output: 'export',
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}`,
};

module.exports = nextConfig;