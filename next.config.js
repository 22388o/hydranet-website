/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {},
  webpack: (config, { dev }) => {
    config.resolve.extensions = ['', '.js', '.jsx', '.ts', '.tsx'];
    return config;
  },
  i18n: {
    localeDetection: false,
    locales: ['en', 'fr'],
    defaultLocale: 'en',
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
