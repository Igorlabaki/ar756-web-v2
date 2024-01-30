'use client';

import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ImageType } from '@/types';

interface CarouselProps{
  imageList: ImageType[];
}

export  default function CarouselComponent({imageList}:CarouselProps) {
  const [width, setWidth] = useState(0);
  const caroucel: any = useRef();

  useEffect(() => {
    setWidth(() => caroucel.current.scrollWidth - caroucel.current.offsetWidth + 100);
  }, [caroucel?.current?.scrollWidth, imageList, caroucel]);
  console.log(imageList)
  return (
    <motion.div
      ref={caroucel}
      className="flex flex-col items-center justify-center mx-1 overflow-hidden bg-gray-200 rounded-md md:flex-row cursor-grab h-[400px] w-[600px]"
    >
      <motion.div
        drag="x"
        initial={{ x: -100 }}
        dragConstraints={{ right: 0, left: -width }}
        whileTap={{ cursor: 'grabbing' }}
        className="flex w-full h-full p-1 gap-x-1 "
      >
        <AnimatePresence>
          {imageList?.map((item: ImageType) => {
            return (
              <motion.img
                className="h-[400px] w-[600px] overflow-hidden rounded-md "
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
