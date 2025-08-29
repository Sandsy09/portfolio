import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsList = ({projects}) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1100px] mx-auto px-4 mt-12">
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
