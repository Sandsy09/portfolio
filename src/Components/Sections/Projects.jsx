import React from 'react'
import FeaturedProjectLeft from '../ui/FeaturedProjectLeft';
import FeaturedProjectRight from '../ui/FeaturedProjectRight';

import ProjectImage from '/project-placeholder.jpg'

const content = {
    image: ProjectImage,
    techStack: [
        'React',
        'Tailwind',
        'Node',
        'Express'
    ],
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore eaque odio voluptatibus illum perferendis. Cupiditate nihil alias, omnis temporibus cumque in, quas, unde commodi exercitationem eaque deleniti inventore minus. Ducimus?',
    projectName: 'React Project',
    gitLink: 'https://github.com/',
    liveLink: 'https://youtube.com'
}

const Projects = () => {
    return (
        <section id='projects' style={{minHeight:'100vh'}}>
            <div className="container my-24 mx-auto py-12 lg:py-18 font-roboto">
                <h3 className='font-roboto-mono tracking-widest font-medium text-(--foreground)/80 text-start text-4xl mb-8 lg:mb-10 pl-8 lg:pl-10'>Projects I&#39;ve Worked On</h3>
                <div className="flex flex-col">
                    <FeaturedProjectLeft content={content}/>
                    <FeaturedProjectRight content={content}/> 
                    <FeaturedProjectLeft content={content}/> 
                </div>
            </div>
        </section>
    )
};

export default Projects;
