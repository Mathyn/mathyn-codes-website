import { render, screen } from '@testing-library/angular';
import { ProjectsBlockComponent } from './projects-block.component';
import { PROJECTS_MOCK } from '../../../testing/data/projects.mock';

describe('ProjectsBlockComponent', () => {
    test('Render a project component for each project', async () => {
        // Arrange + Act
        await render(ProjectsBlockComponent, {
            inputs: {
                projects: PROJECTS_MOCK
            }
        });

        // Assert
        for (let i = 0; i < PROJECTS_MOCK.length; i++) {
            const element = screen.getByTestId(`project-${i}`);

            expect(element).toBeTruthy();
        }
    });
});
