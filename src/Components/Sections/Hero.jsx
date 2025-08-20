import { ArrowRight } from 'lucide-react'

import Button from "../ui/Button/Button.component";
import { BUTTON_TYPE_CLASSES } from "../ui/Button/button.types";

const Hero = () => {
  return (
    <section id='hero'>
      <div className='min-h-screen flex items-center justify-center'>
        <div className="container max-w-4xl mx-12 md:mx-6">
          <div className="flex flex-col items-start">
            <p className="font-space-mono mb-4 text-(--primary)">Hi, my name is</p>
            <h1 className="font-roboto font-medium text-6xl md:text-8xl text-start text-(--foreground)/85 mb-2">Alex Sands.</h1>
            <h2 className="font-roboto text-5xl md:text-7xl text-start text-(--foreground)/50 mb-4">All Things Data Meets Web Dev.</h2>
            <p className="font-roboto text-md text-start text-(--foreground)/50 max-w-xl">I&#39;m a Data Science enthusiast with a passion for uncovering business solutions through data and providing visual insights for analytics. Alongside data I love building and occasionally designing stunning and responsive web solutions. </p>
          </div>
          <div className="flex justify-evenly mt-12 max-w-[600px] mx-auto">
            <Button buttonType={BUTTON_TYPE_CLASSES.base}>View Products</Button>
            <Button className='group' buttonType={BUTTON_TYPE_CLASSES.ghost}>
              View Full CV 
              <ArrowRight className='group-hover:translate-x-1 transition-transform' />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

