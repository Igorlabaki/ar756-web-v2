'use client';

import { AnimatedTitleComponent } from '@/components/utils/animatedTitle';
import { AnimatedVerticalComponent } from '@/components/utils/animatedVertical';
import { ImageComponent } from '@/components/utils/image';
import { motion } from 'framer-motion';

export function WelcomeHeaderComponent() {
  const defaultAnimations = {
    offscreen: {
      width: 0,
    },
    onscreen: {
      width: '25%',
      y: 0,
    },
  };
  return (
    <>
      <div className="flex justify-start items-center gap-x-3 relative ">
        <motion.hr
          className="h-[2px] bg-black border-black "
          initial={'offscreen'}
          whileInView={'onscreen'}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 'all' }}
          variants={defaultAnimations}
        />
        <AnimatedTitleComponent
          title="BEM-VINDO A VILA"
          className={`text-start text-[18px]  md:text-[25px] tracking-[0.25rem]  md:w-[60%] `}
        />
      </div>
      <AnimatedVerticalComponent className="flex justify-center items-center md:items-end md:justify-end  w-full md:w-[55%] ">
        <ImageComponent
          alt={'logo AR756'}
          h={'h-[80px] md:h-[100px] '}
          w={'w-[220px] md:w-[320px]'}
          src={
            'https://res.cloudinary.com/dcjkvwbvh/image/upload/v1688637347/onbridge/uswu0yqtfeo2aq3vomkf.png'
          }
        />
      </AnimatedVerticalComponent>
    </>
  );
}
