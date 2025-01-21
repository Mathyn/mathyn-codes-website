import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProjectModel } from '../models/project.model';
import { PROJECTS } from '../data/projects';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
    /**
     * Gets all the projects.
     * @returns An observable of the list of projects
     */
    getAll(): Observable<ProjectModel[]> {
        // Basically a dummy placeholder right now, in the future we could do a back-end call here though!
        return of(PROJECTS);
    }
}
