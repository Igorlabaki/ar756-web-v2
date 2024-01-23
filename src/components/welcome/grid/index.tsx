import { GridItemComponent } from './itemGrid';

import { Image } from '@prisma/client';

interface WelcomeGridProps {
  imageList: Image[];
}

export function WelcomeGridComponent({ imageList }: WelcomeGridProps) {
  return (
    <div
      className={`relative w-full grid grid-cols-14 grid-rows-8 flex-1 gap-2 pt-20 overflow-hidden h-[600px]`}
    >
      {imageList?.map((gridItem: Image, index: number) => {
        return (
          <GridItemComponent
            gridItem={gridItem}
            index={index}
            key={index}
          />
        );
      })}
    </div>
  );
}
