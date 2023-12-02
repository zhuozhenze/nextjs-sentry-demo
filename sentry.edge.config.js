import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://35d2d6c66e12152f1dd166175e92b22b@o4506257103716352.ingest.sentry.io/4506324932493312",

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,

  // ...

  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
});