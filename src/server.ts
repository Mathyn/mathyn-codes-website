import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr/node';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { basename, dirname, join, resolve } from 'node:path';
import bootstrap from './main.server';
import { LOCALE_ID } from '@angular/core';
import { REQUEST, RESPONSE } from './express.tokens';

export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  /**
   * Get the language from the corresponding folder
   */
  const lang = basename(serverDistFolder);
  /**
   * Set the route for static content and APP_BASE_HREF
   */
  const langPath = `/${lang}/`;
  /**
   * Note that the 'browser' folder is located two directories above 'server/{lang}/'
   */
  const browserDistFolder = resolve(serverDistFolder, `../../browser/${lang}`);
  const indexHtml = join(serverDistFolder, 'index.server.html');

  const commonEngine = new CommonEngine();

  server.set('view engine', 'html');
  server.set('views', browserDistFolder);

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  // Complete the route for static content by concatenating the language.
  server.get(
    '*.*',
    express.static(browserDistFolder, {
      maxAge: '1y',
    })
  );

  // All regular routes use the Angular engine
  server.get('*', (req, res, next) => {
    /**
     * Discard baseUrl as we will provide it with langPath
     */
    const { protocol, originalUrl, headers } = req;
    commonEngine
      .render({
        bootstrap,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: resolve(serverDistFolder, '../../browser/'), // publicPath does not need to concatenate the language.
        providers: [
          { provide: APP_BASE_HREF, useValue: langPath },
          { provide: LOCALE_ID, useValue: lang },
          { provide: RESPONSE, useValue: res },
          { provide: REQUEST, useValue: req },
        ],
      })
      .then((html) => res.send(html))
      .catch((err) => next(err));
  });

  return server;
}