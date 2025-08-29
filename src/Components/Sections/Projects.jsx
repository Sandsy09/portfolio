import React, { useEffect, useState } from 'react'

import FeaturedList from '../ui/FeaturedProjects/FeaturedList';
import Modal from '../ui/Modal';

import { projectData } from '../../../config';
import ProjectCard from '../ui/Projects/ProjectCard';
import ProjectsList from '../ui/Projects/ProjectsList';

const Projects = () => {

    const [featuredProjects, setFeaturedProjects] = useState([]);
    const [otherProjects, setOtherProjects] = useState([]);
    const [projectModalOpen, setProjectModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        const featuredProjects = projectData.filter((fp) => fp.featured === true);
        const otherProjects = projectData.filter((fp) => fp.featured !== true);
        setFeaturedProjects(featuredProjects);
        setOtherProjects(otherProjects);
    }, []);

    const handleProjectClick = (projectId, projectList) => {
        document.body.style.overflow = "hidden"
        const projects = projectList === 'featured' ? featuredProjects : otherProjects;
        const newSelectedProject = projects.filter((project) => project.id === projectId);
        setProjectModalOpen(true);
        setSelectedProject(newSelectedProject);
    };

    const handleModalClose = () => {
        document.body.style.overflow = "unset"
        setProjectModalOpen(false);
        setSelectedProject(null);
    };

    return (
        <>
            {projectModalOpen &&
                <Modal
                    project={selectedProject[0]}
                    projectModalOpen={projectModalOpen}
                    handleModalClose={handleModalClose}
                />
            }
            <section id='projects' style={{ minHeight: '100vh' }}>
                <div className="container my-24 mx-auto py-12 lg:py-18 font-roboto">
                    <h3 className='font-roboto-mono tracking-widest font-medium text-(--foreground)/80 text-start text-4xl mb-8 lg:mb-10 pl-8 lg:pl-10'>Projects I&#39;ve Worked On</h3>
                    <FeaturedList featuredProjects={featuredProjects} handleProjectClick={handleProjectClick}/>
                    <ProjectsList projects={otherProjects}/>
                </div>
            </section>
        </>
    );
};

export default Projects;
