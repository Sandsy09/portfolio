import React from 'react';
import { createPortal } from 'react-dom';
import { LucideX } from 'lucide-react';

import Button from './Button/button.component';
import {BUTTON_TYPE_CLASSES} from './Button/button.types';

import { techLogos } from '../../../config';

const modalRoot = document.getElementById('modal-root');

const getIcon = (techType) => {
    const tech = techType.toLowerCase().replace(" ", "");

    if (!techLogos[tech]) {
        console.error("No logo associated");
        return null;
    }
    const iconURL = techLogos[tech]
    return iconURL;
}

const Modal = ({ handleModalClose, project }) => {
    return (
        createPortal(
            <>
                <div className="font-roboto fixed bg-black/60 backdrop-blur-xs h-full w-full inset-0 flex items-center justify-center z-100">
                    <div className="relative container h-[90vh] max-w-4xl px-8 py-12 bg-(--background) rounded-md z-50 overflow-y-auto overflow-hidden">
                        <div className="flex flex-col text-center sm:text-left">
                            <div className="flex items-center mb-2">
                                <div className="h-16 w-16 rounded-full shadow-2xl mr-2"></div>
                                <div className="">
                                    <h2 className='font-bold text-4xl mb-1'>{project.projectName}</h2>
                                    <span className='bg-(--ice-teal)/30 text-(--ice-teal) font-bold text-sm py-1 px-2 rounded-full'>{project.projectType}</span>
                                </div>
                            </div>
                            <div className="w-full h-[40vh] rounded-md mt-4 overflow-hidden">
                                <img src={project.image} alt="" className='w-full h-full object-cover' />
                            </div>
                            <div className="bg-(--muted)/50 rounded-xl px-6 py-4 mt-8">
                                <h3 className='text-start font-bold text-xl'>About this Project</h3>
                                <p className='text-md text-start text-(--ice-text-content) my-3'>{project.fullDescription}</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2">
                                    {
                                        project.techStack.map((tech, idx) => {
                                            
                                            return (
                                                <p key={`tech-${idx}`} className='flex items-center text-md'>
                                                    <img 
                                                        src={getIcon(tech)}
                                                        alt="Tech Logo"
                                                        className='mr-2 h-[1.5rem] w-[1.5rem]'
                                                    />
                                                    {tech}
                                                </p>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <Button buttonType={BUTTON_TYPE_CLASSES.danger} onClick={handleModalClose} className='mt-6'>Close</Button>
                        </div>
                        <button onClick={handleModalClose} className="absolute top-5 right-5 block cursor-pointer">
                            <LucideX size={30} className='text-white hover:text-(--destructive) transition-color duration-150' />
                        </button>
                    </div>
                </div>
            </>
            , modalRoot)
    )
}

export default Modal
