const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const fs = require('fs');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: '../out',
  webpack: (config, { isServer }) => {
    if (isServer) {
      const cnd = fs.existsSync(path.resolve('./md'));

      const sourceDir = cnd
        ? path.resolve('./md')
        : path.resolve('./src/md');
      const destinDir = cnd
        ? path.resolve('./.next/server/md')
        : path.resolve('./src/.next/server/md');

      config.plugins.push(
        new CopyPlugin({
          patterns: [
            {
              from: sourceDir,
              to: destinDir, // Use destinDir for the destination
            },
          ],
        })
      );
    }
    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  }
};

module.exports = nextConfig;
