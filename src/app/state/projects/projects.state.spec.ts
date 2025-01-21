import { TestBed } from '@angular/core/testing';
import { provideStore, Store } from '@ngxs/store';
import { ProjectsState } from './projects.state';
import { LoadProjectsAction } from './projects-state.actions';
import { ProjectsService } from '../../services/projects.service';
import { firstValueFrom, of, throwError } from 'rxjs';
import { PROJECTS_MOCK } from '../../../testing/data/projects.mock';

describe('ProjectsState', () => {
    let store: Store;
    let getAllProjectsSpy: jest.Mock;

    beforeEach(() => {
        getAllProjectsSpy = jest.fn();
        const projectsServiceMock: Partial<ProjectsService> = {
            getAll: getAllProjectsSpy
        };

        TestBed.configureTestingModule({
            providers: [
                provideStore([ProjectsState]),
                {
                    provide: ProjectsService,
                    useValue: projectsServiceMock
                }
            ]
        });

        store = TestBed.inject(Store);
    });

    describe('with the initial state', () => {
        it('should have an empty list of projects', () => {
            // Arrange + Act
            const projects = store.selectSnapshot(ProjectsState.projects);

            // Assert
            expect(projects).toEqual([]);
        });

        it('should not be loading', () => {
            // Arrange + Act
            const isLoading = store.selectSnapshot(ProjectsState.isLoading);

            // Assert
            expect(isLoading).toBe(false);
        });

        it('should not have a loading error', () => {
            // Arrange + Act
            const loadingError = store.selectSnapshot(ProjectsState.loadingError);

            // Assert
            expect(loadingError).toBeUndefined();
        });
    });

    describe('LoadProjectsAction', () => {
        it('isLoading should be true while not completed', () => {
            // Arrange + Act
            getAllProjectsSpy.mockReturnValue(of());
            store.dispatch(new LoadProjectsAction());

            const isLoading = store.selectSnapshot(ProjectsState.isLoading);

            // Assert
            expect(isLoading).toBe(true);
        });

        it('should set isLoading to false after loading', async () => {
            // Arrange
            getAllProjectsSpy.mockReturnValue(of([]));

            // Act
            await firstValueFrom(store.dispatch(new LoadProjectsAction()));

            // Assert
            const isLoading = store.selectSnapshot(ProjectsState.isLoading);
            expect(isLoading).toBe(false);
        });

        it('should load the projects', async () => {
            // Arrange
            getAllProjectsSpy.mockReturnValue(of(PROJECTS_MOCK));

            // Act
            await firstValueFrom(store.dispatch(new LoadProjectsAction()));

            // Assert
            const loadedProjects = store.selectSnapshot(ProjectsState.projects);
            expect(loadedProjects).toEqual(PROJECTS_MOCK);
        });

        it('should handle any errors', async () => {
            // Arrange
            getAllProjectsSpy.mockReturnValue(
                throwError(() => ({ message: 'An error occurred' }))
            );

            // Act
            await expect(
                firstValueFrom(store.dispatch(new LoadProjectsAction()))
            ).rejects.toMatchObject({ message: 'An error occurred' });

            // Assert
            const loadingError = store.selectSnapshot(ProjectsState.loadingError);
            expect(loadingError).toEqual('An error occurred');
        });
    });
});
