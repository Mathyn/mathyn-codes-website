import { Component, input } from '@angular/core';
import { ProjectComponent } from '../project/project.component';
import { ProjectModel } from '../../models/project.model';

@Component({
    selector: 'app-projects-block',
    templateUrl: './projects-block.component.html',
    imports: [
        ProjectComponent
    ]
})
export class ProjectsBlockComponent {
    projects = input.required<ProjectModel[]>();
}
