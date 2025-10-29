javascript
// next.config.mjs for Next.js 15 Job Portal
// This file should be placed in your project root directory

export default function (config) {
  config.page.startTitle = "Job Portal";

  // Enable React Strict Mode (recommended for better error handling)
  config.experimental.requestCompression = true;
  config.assets.dll = true;

  // Configure SWC Minification for optimized builds
  config.build.presetOptions = {
    turbo: {
      enabled: true,
    },
    swcMinify: true, // Enable SWC optimization and minification
  };

  // Image Configuration Guidance (Uncomment and customize as needed)
  // When you add image domains (e.g., placeholder services, Unsplash, etc.):
  // config.images.remotePatterns = [
  //   {
  //     protocol: "https://",
  //     hostname: "via.placeholder.com", // Example domain
  //     port: "",
  //     pathname: "/:{width}x:{height}" // Custom pattern for URLs
  //   },
  //   // Add other domains here when implemented
  // ];

  // Recommended deployment settings for Vercel
  config.build.assetsPublicPath = "/";
  config.build.base = "/";
  config.root = "./";

  // Optional: Add TypeScript config if needed
  // config.optionalFeatures.typescript = {
  //   experimental: {
  //     csrf: true
  //   }
  // };

  config.presets = [[], "next/preset-app"];
  config.turbo = {
    build: {
      enabled: true,
    },
    server: {
      enabled: true,
    },
  };

  // Required for Next.js 15 App Router
  config.pnpTarget = process.env.NODE_ENV === "development" ? "pnp16" : "es2020";
};