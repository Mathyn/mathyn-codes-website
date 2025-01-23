/**
 * Describes a single project for a specific customer.
 */
export interface ProjectModel {
    /**
     * The job title during the project.
     */
    jobTitle: string;
    /**
     * The company that the project was done for.
     */
    company: string;
    /**
     * Optional link to the company's website.
     */
    companyLink?: string;
    /**
     * The year the project started.
     */
    startYear: number;
    /**
     * Optional year the project ended. If undefined, the project is assumed to be ongoing.
     */
    endYear?: number;
    /**
     * Relevant skills used in the project.
     */
    skills: string[];
    /**
     * The project description.
     */
    description: string;
}