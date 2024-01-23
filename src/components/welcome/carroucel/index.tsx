'use client';

import React, { useState, useEffect, useRef } from 'react';

import { Image } from '@prisma/client';
import { AnimatePresence, Variants, motion } from 'framer-motion';

interface WelcomeCarroucelProps {
  imageList: Image[];
}

export function WelcomeCarroucelComponent({ imageList }: WelcomeCarroucelProps) {
  const [width, setWidth] = useState(0);
  const caroucel: any = useRef();

  const variantAnimation: Variants = {
    offscreen: {
      x: 0,
    },
    onscreen: {
      x: -900,
      transition: {
        type: 'linear',
        duration: 5,
      },
    },
  };

  useEffect(() => {
    setWidth(() => caroucel.current.scrollWidth - caroucel.current.offsetWidth);
  }, [caroucel?.current?.scrollWidth, caroucel]);

  return (
    <motion.div
      ref={caroucel}
      className="flex flex-col items-center justify-center mx-1 overflow-hidden bg-gray-200 rounded-md md:flex-row cursor-grab "
    >
      <motion.div
        drag="x"
        variants={variantAnimation}
        initial={'offscreen'}
        whileInView={'onscreen'}
        viewport={{ once: true, amount: 'all' }}
        dragConstraints={{ right: 0, left: -width }}
        whileTap={{ cursor: 'grabbing' }}
        className="flex w-full h-full p-1 gap-x-1 "
      >
        <AnimatePresence>
          {imageList?.map((item: Image) => {
            return (
              <motion.img
                className="min-w-full min-h-full overflow-hidden rounded-md "
                key={item?.id}
                src={item?.imageUrl}
              />
            );
          })}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
