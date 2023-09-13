// const { withContentlayer } = require('next-contentlayer')

// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = withContentlayer(nextConfig)

const { withContentlayer } = require('next-contentlayer');

module.exports = withContentlayer({
  contentlayer: {
    // Configuration for next-contentlayer
    contentDir: 'content', // Path to your content directory
  },
  // Your other Next.js configurations go here
  // For example, you can define your target, webpack config, or other Next.js options here.
});
// next.config.js
module.exports = {
    distDir: 'out',
    // Your other Next.js configuration options...
  };