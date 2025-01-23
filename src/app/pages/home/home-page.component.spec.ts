import { render, screen } from '@testing-library/angular';
import HomePageComponent from './home-page.component';
import { Store } from '@ngxs/store';
import { LoadProjectsAction } from '../../state/projects/projects-state.actions';
import { ProjectsState } from '../../state/projects/projects.state';
import { signal } from '@angular/core';
import { PROJECTS_MOCK } from '../../../testing/data/projects.mock';

describe('HomeComponent', () => {
    test('Create component', async () => {
        await render(HomePageComponent, {
            providers: [
                {
                    provide: Store,
                    useValue: createMockStore()
                }
            ]
        });
    });

    test('Dispatch LoadProjectsAction on init', async () => {
        const dispatchMock = jest.fn();
        await render(HomePageComponent, {
            providers: [
                {
                    provide: Store,
                    useValue: createMockStore({}, dispatchMock)
                }
            ]
        });

        expect(dispatchMock.mock.calls).toHaveLength(1);
        expect(dispatchMock.mock.calls[0][0]).toBeInstanceOf(LoadProjectsAction);
    });

    describe('Project are loading', () => {
        beforeEach(async () => {
            await render(HomePageComponent, {
                providers: [
                    {
                        provide: Store,
                        useValue: createMockStore({
                            isLoading: true
                        })
                    }
                ]
            });
        });

        test('Displays loading message', () => {
            expect(screen.queryByTestId('loading-message')).not.toBeNull();
        });

        test('Don\'t display the projects', () => {
            expect(screen.queryByTestId('projects')).toBeNull();
        });
    });

    describe('Project are loaded', () => {
        beforeEach(async () => {
            await render(HomePageComponent, {
                providers: [
                    {
                        provide: Store,
                        useValue: createMockStore({
                            isLoading: false,
                            projects: PROJECTS_MOCK
                        })
                    }
                ]
            });
        });

        test('Don\'t display a loading message', () => {
            expect(screen.queryByTestId('loading-message')).toBeNull();
        });

        test('Display the projects', () => {
            expect(screen.queryByTestId('projects')).not.toBeNull();
        });
    });
});

function createMockStore(
    /**
     * The values for the selectors that should be mocked.
     */
    selectorValues: Partial<Record<keyof typeof ProjectsState, unknown>> = {},
    /**
     * Optional mock method for the dispatch method.
     */
    dispatchMock: jest.Mock = jest.fn()
): Partial<Store> {
    return {
        dispatch: dispatchMock,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
        selectSignal: jest.fn().mockImplementation((selector: Function) => {
            // So a bit hacky but basically what we do:
            // - iterate all static properties of the ProjectsState class
            // - if the property is a selector, we compare it to the provided selector
            // - if they match we use the key name to retrieve the value from the given selectors object
            for (const key of Object.getOwnPropertyNames(ProjectsState)) {
                const value = ProjectsState[key as keyof typeof ProjectsState];
                if (typeof(value) !== 'function') {
                    continue;
                }

                if (value === selector) {
                    return signal(selectorValues[key as keyof typeof ProjectsState]);
                }
            }

            // If we didn't find the selector, we throw an error
            throw new Error('Unknown selector');
        })
    };
}
