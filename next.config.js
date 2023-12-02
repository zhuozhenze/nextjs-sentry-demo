const {withSentryConfig}  =  require('@sentry/nextjs');

/** @type {import('next').NextConfig} */
const nextConfig = {
    sentry:{

    }
}

const sentryWebpackPluginOptions = {
    org: "zzz-cv",
    project: "javascript-nextjs",
    authToken: process.env.SENTRY_AUTH_TOKEN,
    silent: true,
}

module.exports = withSentryConfig(nextConfig,sentryWebpackPluginOptions);
