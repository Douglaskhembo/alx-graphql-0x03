import * as Sentry from '@sentry/react';

Sentry.init({
  dsn: 'https://<your-public-key>@o<org>.ingest.sentry.io/<project-id>',
  tracesSampleRate: 1.0,
});
