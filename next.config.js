/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
let config = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [{ hostname: "utfs.io" }],
  },
  experimental: {
    serverComponentsExternalPackages: [
      "@node-rs/argon2",
      "@node-rs/argon2-wasm32-wasi",
    ],
  },
};

export default config;
