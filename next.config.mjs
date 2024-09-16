import {withSentryConfig} from '@sentry/nextjs';
/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript:{
        ignoreBuildErrors: true
    },
    eslint:{
        ignoreDuringBuilds: true
    }
};

emodule.exports = withSentryConfig(nextConfig, {
    org: "apsk",
    project: "javascript-nextjs",
  
    // An auth token is required for uploading source maps.
    authToken: process.env.SENTRY_AUTH_TOKEN,
  
    silent: false, // Can be used to suppress logs
  });