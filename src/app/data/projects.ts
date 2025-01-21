import { ProjectModel } from '../models/project.model';

export const PROJECTS: ProjectModel[] = [
    {
        jobTitle: 'Lead front-end developer',
        company: 'DEPOT Software',
        companyLink: 'https://www.depotsoftware.com/',
        startYear: 2024,
        endYear: 2024,
        skills: [
            'Angular',
            'NGXS',
            'Tailwind CSS',
            'TypeScript',
            'HTML',
            'CSS'
        ],
        description: $localize`As the lead front-end developer I helped set up a new front-end team, trained and mentored two new Angular developers, and managed a complete rewrite of one of their core products.`
    },
    {
        jobTitle: 'Back-end developer',
        company: 'TwinAI',
        companyLink: 'https://www.twinai.nl/',
        startYear: 2023,
        endYear: 2023,
        skills: [
            'NodeJS',
            'NestJS',
            'LLM',
            'Bull',
            'TypeScript',
            'SQL',
            'PostgreSQL'
        ],
        description: $localize`Worked on a generic architecture for LLM driven AI agents.`
    },
    {
        jobTitle: 'Windows desktop developer',
        company: 'Guardey',
        companyLink: 'https://www.guardey.com/',
        startYear: 2022,
        endYear: 2023,
        skills: [
            'C#',
            'MAUI',
            'Blazor',
            'HTML',
            'CSS'
        ],
        description: $localize`Maintained and expanded a Windows based VPN client. Worked extensively on stabilizing the code base and adding new features.`
    },
    {
        jobTitle: 'Lead back-end developer',
        company: 'SafeScan',
        companyLink: 'https://www.safescan.com/',
        startYear: 2020,
        endYear: 2022,
        skills: [
            'C#',
            'Azure',
            'MassTransit',
            'SQL',
            'SQL Server'
        ],
        description: $localize`Maintained and expanded a .NET back-end for a time tracking application. Eventually transitioned to the role of lead developer and coached the team on automated testing and general code quality.`
    },
    {
        jobTitle: 'Mobile app developer',
        company: 'Mannen van Waarde',
        companyLink: 'https://mannenvanwaarde.nl/',
        startYear: 2020,
        endYear: 2020,
        skills: [
            'Angular',
            'Ionic',
            'TypeScript',
            'HTML',
            'CSS'
        ],
        description: $localize`Built a mobile house decoration app for Android and iOS.`
    },
    {
        jobTitle: 'Mobile app developer',
        company: 'SuperBuddy',
        startYear: 2019,
        endYear: 2020,
        skills: [
            'Angular',
            'Ionic',
            'NGXS',
            'TypeScript',
            'HTML',
            'CSS'
        ],
        description: $localize`Built a mobile grocery shopping app for Android and iOS.`
    },
    {
        jobTitle: 'Full stack developer',
        company: 'Smilo',
        startYear: 2018,
        endYear: 2019,
        skills: [
            'Angular',
            'Ionic',
            'TypeScript',
            'Java',
            'Spring Boot',
            'SQL',
            'PostgreSQL'
        ],
        description: $localize`Developed mobile and web applications for a next generation blockchain.`
    },
    {
        jobTitle: 'Co-founder & full stack developer',
        company: 'Movin',
        startYear: 2012,
        endYear: 2018,
        skills: [
            'AngularJS',
            'NodeJS',
            'MongoDB',
            'Docker',
            'Docker Swarm',
            'HTML',
            'CSS'
        ],
        description: $localize`I co-founded Movin along with fellow students. At Movin we've built a complete indoor navigation solution.

        This includes rendering of indoor maps, indoor routing, and indoor positioning. As co-founder and full stack developer I've done everything from client acquisition, project management, web development, mobile development, and back-end development.

        Movin was eventually acquired by a larger company and has since seized to exist as a separate entity.
        `
    }
];