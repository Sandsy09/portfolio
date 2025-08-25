import React from 'react'
import Button from "../ui/Button/Button.component";
import { BUTTON_TYPE_CLASSES } from "../ui/Button/button.types";

import { ExternalLink } from 'lucide-react'; 


const FeaturedProjectLeft= ({ content }) => {

    return (
        <div className='relative my-24 max-w-[1000px] mx-auto'>
            <div className='absolute z-0 -top-[2vh] left-1/10 rounded-sm overflow-hidden'>
                <div className="peer absolute z-1 top-0 left-0 w-full h-full flex items-center justify-center bg-(--primary)/10 backdrop-blur-[2px] opacity-0 hover:opacity-100 transition-all duration-300 over-hidden">
                    <Button 
                        buttonType={BUTTON_TYPE_CLASSES.base}
                        onClick={() => console.log('boom')} // Handle Modal Preview for Featured Project
                    >Preview</Button>
                </div>
                <img src={content.image} alt="Project Image" className='h-[35vh] w-auto mask-l-from-50% mask-l-to-90% peer-hover:scale-110 transition-transform duration-500' />
            </div>
            <div className={`relative z-10 max-w-5/10 ms-auto`}>
                <h5 className='font-space-mono text-(--accent) text-sm text-end mr-4 mb-1'>Featured</h5>
                <h4 className='text-2xl font-bold font-roboto-mono text-end mr-4 mb-2'>{content.projectName}</h4>
                <div className='bg-(--muted) text-(--muted-foreground) py-3 px-4 hover:shadow-lg hover:shadow-(color:--primary) transition-shadow duration-300'>
                    <p className='text-end mb-4 hover:shadow-sm'>{content.description}</p>
                    <div className='flex space-x-2 justify-end mr-4'>
                        {
                            content.techStack.map((item, i) => {
                                return (
                                    <span key={`tech-${i}`} className='text-sm text-(--primary) font-roboto-mono bg-(--muted-foreground)/10 py-[0.1rem] px-3 rounded-full hover:font-bold transition-all duration-300'>{item}</span>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='flex justify-end space-x-2 mr-8 mt-2'>
                    {
                        content && content.gitLink 
                            ? <a href={content.gitLink}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' viewBox="0 0 24 24" className='text-(--foreground)/90 hover:text-(--primary) transition-colors duration-300' width="24" height="24" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round">
                                    <title>GitHub</title>
                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                                </svg>
                            </a>
                            : null
                    }
                    {
                        content && content.liveLink
                            ? <a href={content.liveLink}>
                                <ExternalLink size={24} className='text-(--foreground)/90 hover:text-(--primary) transition-colors duration-300'/>
                            </a>
                            : null
                    }
                </div>
            </div>
        </div>
    )
}

export default FeaturedProjectLeft;
