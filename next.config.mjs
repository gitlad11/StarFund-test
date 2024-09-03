/** @type {import('next').NextConfig} */
/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    webp: {
      preset: "default",
      quality: 100,
    },
    images: {
        domains: ["randomuser.me", "dummyimage.com"],
    },
    eslint: {
      ignoreDuringBuilds: true,
  },
    //настройка языков
    i18n: {
      locales: ["ru", "kz"],
      defaultLocale: "ru",
    },
  };

export default nextConfig;
