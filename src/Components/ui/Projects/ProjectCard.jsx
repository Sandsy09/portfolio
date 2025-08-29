import { ExternalLink } from 'lucide-react';
import React from 'react'

const ProjectCard = ({ project }) => {
    return (
        <a href={project.liveLink}>
            <div className='flex container bg-(--muted)/60 text-(--muted-foreground) rounded-sm font-roboto p-5 min-h-[300px] max-w-[380px] mx-auto hover:-translate-y-[15px] hover:-translate-x-[15px] hover:shadow-[15px_15px_0px_-3px_var(--primary)] transition-all duration-300'>
                <div className="flex flex-col relative container min-h-[90%]">
                    <h1 className='text-start text-xl text-(--primary) font-roboto-mono mt-12 ml-4'>{project.projectName}</h1>
                    <p className='ml-4 mt-5 text-start max-w-[85%]'>
                        {
                            project && project.shortDescription.length > 100
                            ? `${project.shortDescription.substring(0, 100)}...`
                            : project.shortDescription
                        }
                    </p>
                    <div className="flex space-x-2 mt-auto mb-2 mr-2 justify-end">
                        {
                            project.techStack.map((tech) => {
                                return <span className='font-roboto-mono text-xs hover:text-(--primary) hover:font-medium'>{tech}</span>
                            })
                        }
                    </div>
                    <div className='absolute top-0 right-0'>
                        <div className="flex space-x-2">
                            {
                                project && project.liveLink
                                    ? <a href={project.liveLink}>
                                        <ExternalLink
                                            size={24}
                                            className='text-(--muted-foreground)/90 hover:text-(--accent) transition-colors duration-300'
                                        />
                                    </a>
                                    : null
                            }
                            {
                                project && project.gitLink
                                    ? <a href={project.gitLink}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' viewBox="0 0 24 24" className='text-(--muted-foreground)/90 hover:text-(--accent) transition-colors duration-300' width="24" height="24" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round">
                                            <title>GitHub</title>
                                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                        </svg>
                                    </a>
                                    : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default ProjectCard;
