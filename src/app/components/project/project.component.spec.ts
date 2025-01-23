import { ProjectModel } from '../../models/project.model';
import { ProjectComponent } from './project.component';
import { render, screen } from '@testing-library/angular';

const MOCK_PROJECT: ProjectModel = {
    jobTitle: 'Software Developer',
    company: 'Google',
    startYear: 2020,
    skills: ['CSS', 'Angular', 'TypeScript', 'HTML'],
    description: 'I worked on the Google search engine.',
};

describe('ProjectComponent', () => {
    describe('Start and end year are defined', () => {
        test('Display "{startYear} - {endYear}"', async () => {
            await render(ProjectComponent, {
                inputs: {
                    project: {
                        ...MOCK_PROJECT,
                        endYear: 2021
                    }
                }
            });
            
            expect(screen.getByTestId('year-coverage').textContent).toContain('2020 - 2021');
        });
    });

    describe('Only the start year is defined', () => {
        test('Display "{startYear} - Ongoing"', async () => {
            await render(ProjectComponent, {
                inputs: {
                    project: MOCK_PROJECT
                }
            });
            
            expect(screen.getByTestId('year-coverage').textContent).toContain('2020 - Ongoing');
        });
    });

    test('Display the job title', async () => {
        await render(ProjectComponent, {
            inputs: {
                project: MOCK_PROJECT
            }
        });

        expect(screen.getByTestId('job-title').textContent).toContain('Software Developer');
    });

    test('Display the description', async () => {
        await render(ProjectComponent, {
            inputs: {
                project: MOCK_PROJECT
            }
        });

        expect(screen.getByTestId('description').textContent).toContain('I worked on the Google search engine.');
    });

    describe('No link to the company website is defined', () => {
        test('Display just the company name', async () => {
            await render(ProjectComponent, {
                inputs: {
                    project: MOCK_PROJECT
                }
            });
    
            expect(screen.getByTestId('company-name').textContent).toContain('Google');
        });
    });

    describe('A link to the company website is defined', () => {
        test('Display the company name as a link', async () => {
            await render(ProjectComponent, {
                inputs: {
                    project: {
                        ...MOCK_PROJECT,
                        companyLink: 'https://google.com'
                    }
                }
            });
    
            expect(screen.getByTestId('company-link').textContent).toContain('Google');
            expect(screen.getByTestId('company-link').getAttribute('href')).toBe('https://google.com');
        });
    });

    test('Display the skills as a comma seperated string in alphabetical order', async () => {
        await render(ProjectComponent, {
            inputs: {
                project: {
                    ...MOCK_PROJECT
                }
            }
        });

        expect(screen.getByTestId('skills').textContent).toContain('Angular, CSS, HTML, TypeScript');
    });
});
