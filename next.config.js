/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    config.module.rules.push({
      test: /\.pdf$/,
      use: [
        {
          loader: "file-loader",
          // options: {
          //   name: "[path][name].[ext]",
          //   outputPath: "/public",
          // },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
