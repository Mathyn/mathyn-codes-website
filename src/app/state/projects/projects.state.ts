import { Action, Selector, State, StateContext, StateToken } from '@ngxs/store';
import { ProjectModel } from '../../models/project.model';
import { Injectable } from '@angular/core';
import { LoadProjectsAction } from './projects-state.actions';
import { ProjectsService } from '../../services/projects.service';
import { catchError, tap, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

export interface ProjectsStateModel {
    /**
     * True if the projects are currently being loaded.
     */
    isLoading: boolean;
    /**
     * If an error occurred while loading the projects, this contains the error message.
     */
    loadingError?: string;
    /**
     * The list of projects that have been loaded.
     */
    projects: ProjectModel[];
}

export const PROJECTS_STATE_TOKEN = new StateToken<ProjectsStateModel>('projects');

@State({
    name: PROJECTS_STATE_TOKEN,
    defaults: {
        isLoading: false,
        loadingError: undefined,
        projects: [],
    }
})
@Injectable()
export class ProjectsState {
    @Selector()
    static projects(state: ProjectsStateModel): ProjectModel[] {
        return state.projects;
    }

    @Selector()
    static isLoading(state: ProjectsStateModel): boolean {
        return state.isLoading;
    }

    @Selector()
    static loadingError(state: ProjectsStateModel): string | undefined {
        return state.loadingError;
    }

    constructor(
        private readonly projectsService: ProjectsService,
    ) {}

    @Action(LoadProjectsAction)
    loadProjects(ctx: StateContext<ProjectsStateModel>) {
        ctx.patchState({
            isLoading: true,
            loadingError: undefined,
        });

        return this.projectsService.getAll().pipe(
            tap((projects) => {
                ctx.patchState({
                    isLoading: false,
                    projects,
                });
            }),
            catchError((error: HttpErrorResponse) => {
                ctx.patchState({
                    isLoading: false,
                    loadingError: error.message,
                });
                
                return throwError(() => error);
            })
        );
    }
}
