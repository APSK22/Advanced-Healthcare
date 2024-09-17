// import { withSentryConfig } from '@sentry/nextjs';
/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true
    },
    eslint: {
        ignoreDuringBuilds: true
    }
};

import { withSentryConfig } from "@sentry/nextjs";

export default withSentryConfig(
  nextConfig, // Changed this line
  {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

    org: "arms-9n",
    project: "javascript-nextjs",
    sentryUrl: "https://sentry.io/",

    // Only print logs for uploading source maps in CI        
    silent: !process.env.CI,

    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    widenClientFileUpload: true,

    reactComponentAnnotation: {
      enabled: true,
    },

    hideSourceMaps: true,

    disableLogger: true,

    automaticVercelMonitors: true,
  }
);
