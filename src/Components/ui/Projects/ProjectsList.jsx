import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsList = ({projects}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-[850px] mx-auto">
        {
            projects.map((project, i) => {
                return (
                    <ProjectCard key={`projectCard-${i}`} project={project}/>
                );
            })
        }
    </div>
  );
};

export default ProjectsList;
