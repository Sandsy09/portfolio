import React from 'react';

import FeaturedProjectLeft from './FeaturedProjectLeft';
import FeaturedProjectRight from './FeaturedProjectRight';

const FeaturedList = ({ featuredProjects, handleProjectClick }) => {
  return (
    <div className="flex flex-col">
        {
            featuredProjects.map((project, i) => {
                const cardType = (i + 1) % 2 === 0 ? 'right' : 'left';

                return (
                    cardType === 'left' 
                        ? <FeaturedProjectLeft key={`featuredProject-${i}`} content={project} handleProjectClick={handleProjectClick} />
                        : <FeaturedProjectRight key={`featuredProject-${i}`} content={project} handleProjectClick={handleProjectClick} />
                )
            })
        }
    </div>
  );
};

export default FeaturedList;
