import { BsSpeaker } from 'react-icons/bs';
import { GiCctvCamera } from 'react-icons/gi';
import { IoMdMusicalNotes } from 'react-icons/io';
import { MdOutlineCleaningServices, MdOutlineLunchDining } from 'react-icons/md';
import { RiLightbulbLine } from 'react-icons/ri';
import { ImageComponent } from '@/components/utils/image';
import { CardComponent } from '../card';
import { ItemCardComponent } from '../card/itemCard';

export function ServicoCardComponent() {
  return (
    <CardComponent
      h=" h-full md:h-[500px]"
      w={'w-full m-auto md:w-[450px]'}
      className={`md:absolute  text-black   
        rounded-md shadow-lg md:bottom-[6.5rem] md:right-[18%] mb-5 md:mb-10 
        min-w-full
        `}
    >
      <div className="relative flex items-center justify-end w-full space-x-3">
        <div className="border-[1px] border-black flex-1 h-0 " />
        <div className="flex items-center justify-start w-[140px]  ">
          <ImageComponent
            alt={'piscina'}
            h={'h-[60px] '}
            w={'w-[100px]'}
            src={'/assets/icons/logo/preto.png'}
          />
        </div>
        <h1 className="absolute w-full text-end text-2xl text-black top-[2.7rem] pr-[45px]">
          SERVICOS EXTRAS
        </h1>
      </div>
      <div className="flex justify-center flex-1 mt-8 gap-x-10 ">
        <div className="flex flex-col w-full gap-y-3">
          <ItemCardComponent
            title="DJ"
            icon={<IoMdMusicalNotes size={20} />}
          />
          <ItemCardComponent
            title="Som"
            icon={<BsSpeaker size={20} />}
          />
          <ItemCardComponent
            title="Comida"
            icon={<MdOutlineLunchDining size={20} />}
          />
        </div>
        <div className="flex flex-col gap-y-3">
          <ItemCardComponent
            title="Limpeza"
            icon={<MdOutlineCleaningServices size={20} />}
          />
          <ItemCardComponent
            title="Seguranca"
            icon={<GiCctvCamera size={20} />}
          />
          <ItemCardComponent
            title="Iluminacao"
            icon={<RiLightbulbLine size={20} />}
          />
        </div>
      </div>
    </CardComponent>
  );
}
