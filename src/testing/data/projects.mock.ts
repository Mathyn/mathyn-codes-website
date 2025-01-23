import { ProjectModel } from '../../app/models/project.model';

export const PROJECTS_MOCK: ProjectModel[] = [
    {
        company: 'Company 1',
        description: 'Description 1',
        jobTitle: 'Job Title 1',
        skills: ['Skill 1', 'Skill 2'],
        startYear: 2020
    },
    {
        company: 'Company 2',
        description: 'Description 2',
        jobTitle: 'Job Title 2',
        skills: ['Skill 3', 'Skill 4'],
        startYear: 2021
    },
    {
        company: 'Company 3',
        description: 'Description 3',
        jobTitle: 'Job Title 3',
        skills: ['Skill 5', 'Skill 6'],
        startYear: 2022
    }
];
