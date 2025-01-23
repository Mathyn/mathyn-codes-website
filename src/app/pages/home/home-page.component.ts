import { Component, OnInit } from '@angular/core';
import { ShortIntroBlockComponent } from '../../components/short-intro-block/short-intro-block.component';
import { ProjectsBlockComponent } from '../../components/projects-block/projects-block.component';
import { select, Store } from '@ngxs/store';
import { ProjectsState } from '../../state/projects/projects.state';
import { LoadProjectsAction } from '../../state/projects/projects-state.actions';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    imports: [
        ShortIntroBlockComponent,
        ProjectsBlockComponent
    ]
})
export default class HomePageComponent implements OnInit {
    readonly isLoadingProjects = select(ProjectsState.isLoading);

    readonly projects = select(ProjectsState.projects);

    constructor(
        private readonly store: Store
    ) {}

    ngOnInit(): void {
        this.store.dispatch(new LoadProjectsAction());
    }
}