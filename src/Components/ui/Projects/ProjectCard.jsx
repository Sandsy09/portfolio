import React from 'react'

const ProjectCard = ({ project }) => {
    return (
        <div className='container bg-white rounded-md'>
            <h1>{project.projectName}</h1>
        </div>
    );
};

export default ProjectCard;
