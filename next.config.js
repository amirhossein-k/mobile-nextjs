/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "uploads.storage.iran.liara.space",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "marloo.storage.c2.liara.space",
        port: "",
        pathname: "/**",
      },
    ],
    domains: ["uploade.storage.iran.liara.space"],
  },
  env: {
    BASE_URL: "http://localhost:3000",

    LIARA_ENDPOINT: "storage.c2.liara.space",
    LIARA_BUCKET_NAME: "marloo",
    LIARA_ACCESS_KEY: "q799sh0ek8g9al6k",
    LIARA_SECRET_KEY: "f3c9de88-d539-4bdf-b175-df8a7c5fa0af",
  },
  // reactStrictMode: true,
  // swcMinify: true,
  // async headers() {
  //   return [
  //     {
  //       source: "/(.*)",
  //       headers: [
  //         {
  //           key: "X-Frame-Options",
  //           value: "SAMEORIGIN",
  //         },

  //         {
  //           key: "X-Content-Type-Options",
  //           value: "nosniff",
  //         },
  //         {
  //           key: "Permissions-Policy",
  //           value:
  //             "camera=(); battery=(self); geolocation=(); microphone=('https://a-domain.com')",
  //         },
  //         {
  //           key: "Referrer-Policy",
  //           value: "origin-when-cross-origin",
  //         },
  //       ],
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
