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
    ],
    domains: ["uploade.storage.iran.liara.space"],
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
