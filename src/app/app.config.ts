import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { withNgxsReduxDevtoolsPlugin } from '@ngxs/devtools-plugin';
import { withNgxsRouterPlugin } from '@ngxs/router-plugin';
import { provideStore } from '@ngxs/store';
import { ProjectsState } from './state/projects/projects.state';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({
            eventCoalescing: true
        }),
        provideRouter(
            routes
        ),
        provideClientHydration(
            withEventReplay()
        ),
        provideStore(
            [
                ProjectsState
            ],
            withNgxsReduxDevtoolsPlugin(),
            withNgxsRouterPlugin()
        )
    ]
};
