import { BiBeer, BiDumbbell } from 'react-icons/bi';
import { BsCarFrontFill, BsFlower1 } from 'react-icons/bs';
import { FaSwimmingPool, FaWifi } from 'react-icons/fa';
import { GiBarbecue, GiDress, GiPartyPopper } from 'react-icons/gi';
import { MdSoupKitchen } from 'react-icons/md';
import { SectionComponent } from '../utils/section';
import { ImageType } from '@/types';
import { ImageComponent } from '../utils/image';
import { CardComponent } from '../card';
import { ItemCardComponent } from '../card/itemCard';


export async function ComodidadeComponent() {
  return (
    <SectionComponent>
      <div className="w-screen h-screen">
        <video className="max-h-[85%] w-[70%] object-cover" src={"/assets/video/videoComodidades.mp4"} autoPlay loop muted/>
      </div>
      <CardComponent
        h="md:h-[500px]"
        w={'w-[98%] m-auto md:w-[450px]'}
        className="absolute  text-black  flex 
            rounded-md shadow-lg md:bottom-[4.5rem] md:right-[18%] mb-5 md:mb-10"
      >
        <div className="flex items-center justify-end w-full space-x-3">
          <div className="flex items-center justify-end w-[140px] ">
            <ImageComponent
              alt={'logo'}
              h={'h-[60px] '}
              w={'w-[100px]'}
              src={'/assets/icons/logo/preto.png'}
            />
          </div>
          <div className="border-[1px] border-black flex-1 h-0 " />
          <h1 className="absolute w-full text-2xl text-black top-[4.3rem] left-8">COMODIDADES</h1>
        </div>
        <div className="flex mt-8 gap-x-10">
          <div className="space-y-3">
            <ItemCardComponent
              title="Wifi"
              icon={<FaWifi size={20} />}
            />
            <ItemCardComponent
              title="Piscina"
              icon={<FaSwimmingPool size={20} />}
            />
            <ItemCardComponent
              title="Cozinha"
              icon={<MdSoupKitchen size={20} />}
            />

            <ItemCardComponent
              title="Churrasqueira"
              icon={<GiBarbecue size={20} />}
            />
            <ItemCardComponent
              title="Salao de Festa"
              icon={<GiPartyPopper size={20} />}
            />
          </div>
          <div className="space-y-3">
            <ItemCardComponent
              title="Bar"
              icon={<BiBeer size={20} />}
            />
            <ItemCardComponent
              title="Jardim"
              icon={<BsFlower1 size={20} />}
            />
            <ItemCardComponent
              title="Camarim"
              icon={<GiDress size={20} />}
            />
            <ItemCardComponent
              title="Garagem"
              icon={<BsCarFrontFill size={20} />}
            />
            <ItemCardComponent
              title="Academia"
              icon={<BiDumbbell size={20} />}
            />
          </div>
        </div>
      </CardComponent>
    </SectionComponent>
  );
}
