import { app as serverEN } from './en/server.mjs';
import { app as serverNL } from './nl/server.mjs';

import express from 'express';

function run() {
  const port = process.env.PORT || 4000;
  const server = express();

  server.use('/en', serverEN());
  server.use('/nl', serverNL());
  server.get('/', (_, response) => {
    response.redirect('/en');
  });
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();