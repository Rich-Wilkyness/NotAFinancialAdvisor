/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
    webpack: (config, { isServer }) => {
      // Add rule for HTML files
      config.module.rules.push({
        test: /\.html$/,
        use: 'html-loader',
      });
  
      // Return updated configuration
      return config;
    },
  };