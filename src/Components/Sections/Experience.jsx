import React, { useEffect, useState } from 'react';

import { Link2 } from 'lucide-react'

import Button from '../ui/Button/Button.component';
import { BUTTON_TYPE_CLASSES } from '../ui/Button/button.types';

const jobHistory = [
    {
        id: 1,
        startDate: new Date('2020-10-01'),
        endDate: new Date('2021-10-01'),
        company: 'Metro Bank PLC',
        companyUrl: 'https://www.metrobankonline.co.uk/',
        jobTitle: 'Assistant Store Manager',
        category: 'data',
        jobDescription: [
            'Lorem ipsum excepturi possimus, minus deleniti rem. Quod iste sint nisi.',
            'Lorem ipsum dolor leniti rem. Quod iste sint nisi.',
            'Lorem ipsum dolor . Temporibusiti rem. Quod iste sint nisi.',
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus alias? Nobis id sunt ut doloribus quia rerum qui asp',
        ]
    },
    {
        id: 2,
        startDate: new Date('2025-01-01'),//.toLocaleDateString("en-GB", {month: 'short', year: 'numeric'}),
        endDate: null,
        company: 'Swift UK Property Maintenance',
        companyUrl: 'https://www.bristolpropertymaintenance.co.uk/',
        jobTitle: 'React Developer',
        category: 'web',
        jobDescription: [
            'Lorem ipsum excepturi possimus, iste sint nisi.',
            'Lorem ipsum dolor leniti rem. Quod iste.',
            'Lorem ipsum dolor sit amet consectetur. Temporibusiti rem. Quod iste sint nisi.',
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit? Nobis id sunt ut doloribus quia rerum qui asp',
        ]
    },
    {
        id: 3,
        startDate: new Date('2022-10-24'),
        endDate: new Date('2025-04-30'),
        company: 'Metro Bank PLC',
        companyUrl: 'https://www.metrobankonline.co.uk/',
        jobTitle: 'Junior Data Scientist',
        category: 'data',
        jobDescription: [
            'Lorem ipsum excepturi possimus, minus deleniti rem. Quod iste sint nisi.',
            'Lorem ipsum dolor leniti rem. Quod iste sint nisi.',
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibusiti rem. Quod iste sint nisi.',
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus accusamus mollitia alias? Nobis id sunt ut doloribus quia rerum qui asp',
        ]
    },
    {
        id: 4,
        startDate: new Date('2024-01-01'),
        endDate: null,
        company: 'Freelance',
        companyUrl: null,
        jobTitle: 'Full Stack Web Developer',
        category: 'web',
        jobDescription: [
            'Lorem ipsum excepturi possimus, minus deleniti rem. Quod iste sint nisi.',
            'Lorem ipsum dolor leniti rem. Quod iste sint nisi.',
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibusiti rem. Quod iste sint nisi.',
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus accusamus mollitia alias? Nobis id sunt ut doloribus quia rerum qui asp',
        ]
    }
]


const Experience = () => {
    const [filteredJobHistory, setFilteredJobHistory] = useState([]);
    const [selectedJob, setSelectedJob] = useState([]);

    useEffect(() => {
        const filteredJobs = jobHistory.filter((job) => job.category === 'web').sort((a, b) => b.startDate - a.startDate);
        const job = jobHistory.filter((job) => job.id === 2)[0];

        setFilteredJobHistory(filteredJobs);
        setSelectedJob(job);
    }, []);

    const handleCategorySelection = (category) => {
        const filteredJobs = jobHistory.filter((job) => job.category === category).sort((a, b) => b.startDate - a.startDate);
        const job = filteredJobs[0]

        setFilteredJobHistory(filteredJobs);
        setSelectedJob(job);
    };

    const handleJobSelection = (jobId) => {
        const job = filteredJobHistory.filter((job) => job.id === jobId)[0];

        setSelectedJob(job);
    };


    return (
        <section id='experience'>
            <div className="container my-24 mx-auto py-12 lg:py-18 max-w-[750px] font-roboto">
                <h3 className='font-roboto-mono tracking-widest font-medium text-(--foreground)/80 text-start text-4xl mb-8 lg:mb-10 pl-8 lg:pl-10'>Experience</h3>
                <div className="flex justify-center items-center gap-2 mb-8 max-w-[450px] mx-auto font-medium">
                    <span><Button buttonType={BUTTON_TYPE_CLASSES.category} onClick={() => handleCategorySelection('web')}>Web Dev</Button></span>
                    <span><Button buttonType={BUTTON_TYPE_CLASSES.category} onClick={() => handleCategorySelection('data')}>Data</Button></span>
                </div>
                <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 max-w-9/10 mx-auto">
                    <div className='flex lg:flex-col justify-center items-start lg:justify-start lg:w-[270px]'>
                        {
                            filteredJobHistory.map(({ id, company }, i) => {
                                return (
                                    <Button
                                        key={`job - ${i}`}
                                        buttonType={BUTTON_TYPE_CLASSES.job}
                                        onClick={() => handleJobSelection(id)}
                                    >
                                        {company}
                                    </Button>
                                )
                            })
                        }
                    </div>
                    <div className="text-(--foreground)/60 text-start">
                        {selectedJob && selectedJob.length !== 0
                            ? <div>
                                <h4 className='flex items-center gap-2 font-bold tracking-wide text-xl text-(--foreground)/90 mb-1'>
                                    {selectedJob.jobTitle}
                                    {
                                        selectedJob && selectedJob.companyUrl
                                        ? <a
                                            href={selectedJob.companyUrl}
                                            className='flex justify-center items-center h-[30px] w-[30px]'
                                        >
                                            <Link2 size={15} />
                                        </a>
                                        : null
                                    }
                                </h4>
                                <div className='font-medium font-space-mono text-(--primary) mb-4'>
                                    <span>
                                        {selectedJob.startDate.toLocaleDateString("en-GB", { month: 'short', year: 'numeric' })}
                                    </span> -
                                    <span>
                                        {
                                            selectedJob.endDate
                                                ? selectedJob.endDate.toLocaleDateString("en-GB", { month: 'short', year: 'numeric' })
                                                : ' present'
                                        }
                                    </span>
                                </div>
                                <ul className='flex flex-col space-y-1'>
                                    {
                                        selectedJob.jobDescription.map((desc, i) => {
                                            return (
                                                <li key={`desc-${i}`}
                                                    className='before:content-["◦"] before:text-(--primary)'
                                                >{` ${desc}`}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            : null
                        }

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
