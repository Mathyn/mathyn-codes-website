import { Component, computed, input } from '@angular/core';
import { ProjectModel } from '../../models/project.model';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
})
export class ProjectComponent {
    /**
     * The project to display.
     */
    project = input.required<ProjectModel>();

    skillList = computed(() => this.project().skills.sort().join(', '));

    endYearOrOngoing = computed(() => this.project().endYear || $localize`Ongoing`);
}
