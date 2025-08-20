import React from 'react'

import Photo from '/placeholder-photo.jpg'

const About = () => {
    return (
        <section id='about' className='min-h-2/3 py-12 lg:py-18 px-16 lg:px-36' >
            <div className='container  lg:max-w-5xl mx-auto'>
                <h3 className='font-roboto-mono tracking-widest font-medium text-(--foreground)/80 text-start text-4xl mb-8 lg:mb-6'>About Me</h3>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
                    <div className='font-roboto text-start text-(--foreground)/60'>
                        <p className='mb-3 lg:mb-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis veritatis impedit nostrum alias illum, at sapiente facilis quam adipisci, vel architecto asperiores necessitatibus magni, aperiam sequi tempora dicta vero unde.</p>
                        <p className='mb-3 lg:mb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad modi, dolor sit sed quod tempora perspiciatis? Laudantium, dolore. Ad modi officiis dolorem non quasi ipsa, sequi fugit delectus voluptatem est!</p>
                        <p className='mb-3 lg:mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero consequatur molestias minus nostrum fugit, porro laborum velit, necessitatibus natus quibusdam explicabo, cum ullam voluptatem? Maxime eos fugiat enim pariatur asperiores!</p>
                        <p className='mb-3 lg:mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis provident reprehenderit, enim ad sit corrupti praesentium architecto quae labore explicabo repellendus corporis adipisci sint alias! Voluptatem non cupiditate rem fuga!</p>
                        <div className='grid grid-cols-2 gap-4'>
                            <div className='mx-auto lg:ml-2'>
                                <h6 className='font-medium text-(--accent)/70 mb-1'>Data Stack</h6>
                                <ul className=''>
                                    <li className='before:content-["◦"] before:text-(--accent)'> Python</li>
                                    <li className='before:content-["◦"] before:text-(--accent)'> TensorFlow</li>
                                    <li className='before:content-["◦"] before:text-(--accent)'> PyTorch</li>
                                </ul>
                            </div>
                            <div className='mx-auto lg:ml-2'>
                                <h6 className='font-medium text-(--accent)/70 mb-1'>Web Stack</h6>
                                <ul className=''>
                                    <li className='before:content-["◦"] before:text-(--accent)'> JavaScript (ES6+)</li>
                                    <li className='before:content-["◦"] before:text-(--accent)'> Node.js</li>
                                    <li className='before:content-["◦"] before:text-(--accent)'> React</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center order-first lg:order-none'>
                        <div className='overflow-hidden h-72 w-72 rounded-full'>
                            <img src={Photo} className='h-auto w-full object-fit object-cover' alt='Personal Photo' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
