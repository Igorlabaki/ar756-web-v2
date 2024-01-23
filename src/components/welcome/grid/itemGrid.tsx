'use client';
import { ImageComponent } from '@/components/utils/image';
import { Image } from '@prisma/client';

interface GridItemProps {
  index: number;
  gridItem: Image;
}

export function GridItemComponent({ gridItem, index }: GridItemProps) {
  const gridPositionToClasses = [
    'col-start-1 col-end-4 row-start-1 row-end-6',
    'col-start-4 col-end-7 row-start-1 row-end-4',
    'col-start-4 col-end-7 row-start-4 row-end-6',
    'col-start-7 col-end-10 row-start-1 row-end-4',
    'col-start-7 col-end-10 row-start-4 row-end-6',
    'col-start-10 col-end-12 row-start-1 row-end-6',
  ];

  return (
    <div
      className={` rounded-md  hover:scale-[1.01] cursor-pointer hover:z-30 duration-300  shadow-lg  
      overflow-hidden  hover:brightness-110 ${gridPositionToClasses[index]}`}
      onClick={() => {}}
    >
      <ImageComponent
        alt={gridItem.area}
        h={'h-full '}
        w={'w-full'}
        src={gridItem?.imageUrl}
      />
    </div>
  );
}
