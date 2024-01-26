"use client";
import { useState } from "react";
import { ImageType, QuestionType } from "@/types";
import { ExploreCardComponent } from "./card";

import { AnimatedVerticalComponent } from "@/components/utils/animatedVertical";
import { ModalComponent } from "../utils/modal";
import { GaleriaCardComponent } from "./galeria/galeriaCard";
import FaqComponent from "./faq";

interface ExploreProps {
  imageList: ImageType[];
  cardImageList: ImageType[];
  questionList: QuestionType[];
}

export function ExploreComponent({ cardImageList, imageList, questionList }: ExploreProps) {
  const [galeriaModal, setGaleriaModal] = useState(false);
  const [regrasModal, setRegrasModal] = useState(false);
  const [FAQModal, setFAQModal] =
    useState(false);

  function handleCloseGaleriaModa() {
    setGaleriaModal(false);
  }

  function handleOpenGaleriaModa() {
    setGaleriaModal(true);
  }

  function handleCloseFaqModal() {
    setFAQModal(false);
  }

  function handleOpenFaqModal() {
    setFAQModal(true);
  }

  function handleCloseregrasModal() {
    setRegrasModal(false);
  }

  function handleOpenregrasModal() {
    setRegrasModal(true);
  }

  return (
    <>
      <div className=" text-[#555D2D] w-full h-full flex flex-col  justify-center pb-5 items-start gap-y-8 pt-8  md:gap-y-16  md:-mt-16">
        <AnimatedVerticalComponent className="flex items-center justify-center w-full h-full gap-x-3">
          <p
            className={`text-center text-black text-20 md:text-3xl tracking-[0.25rem] font-semibold`}
          >
            MAIS INFORMACOES
          </p>
        </AnimatedVerticalComponent>
        <div className="w-[97%] md:w-[80%] mx-auto flex md:gap-x-10 text-white justify-center items-center flex-col md:flex-row gap-y-4 md:gap-y-0">
          {cardImageList && (
            <>
              <div onClick={() => {}}>
                <ExploreCardComponent
                  alt="foto"
                  containerClassname="z-20"
                  src={cardImageList[0]?.imageUrl}
                  title="SOBRE E REGRAS"
                />
              </div>
              <div onClick={handleOpenFaqModal}>
                <ExploreCardComponent
                  alt="foto"
                  containerClassname="z-20"
                  src={cardImageList[1]?.imageUrl}
                  title="FAQ"
                />
              </div>
              <div onClick={handleOpenGaleriaModa}>
                <ExploreCardComponent
                  alt="foto"
                  containerClassname="z-20"
                  src={cardImageList[2]?.imageUrl}
                  title="GALERIA"
                />
              </div>
            </>
          )}
        </div>
        {galeriaModal && (
          <ModalComponent
            onClose={handleCloseGaleriaModa}
            styleInternal="max-w-[90%] min-w-[90%]  max-h-[90%] min-h-[90%]  md:max-w-[600px]  md:min-w-[600px]   relative bg-white"
          >
            <GaleriaCardComponent
              handleCloseGaleriaModa={handleCloseGaleriaModa}
              imageList={imageList}
            />
          </ModalComponent>
        )}
          {FAQModal && (
        <ModalComponent
          onClose={handleCloseFaqModal}
          styleInternal="max-w-[90%] min-w-[90%]  max-h-[90%] min-h-[90%]  md:max-w-[600px]  md:min-w-[600px]   relative"
        >
          <FaqComponent
            handleCloseFaqModal={handleCloseFaqModal} questionList={questionList}
          />
        </ModalComponent>
      )}
      </div>
    </>
  );
}

/*  

 
 */
{
  /*     
      {comodidadesServicosModal && (
        <ModalComponent
          onClose={handleCloseComodidadeServicoModal}
          styleInternal="max-w-[90%] min-w-[90%]  max-h-[90%] min-h-[90%]  md:max-w-[600px]  md:min-w-[600px]   relative"
        >
          <ComodidadesCardComponent
            handleCloseComodidadeServicoModal={handleCloseComodidadeServicoModal}
          />
        </ModalComponent>
      )}
      {regrasModal && (
        <ModalComponent
          onClose={handleCloseregrasModal}
          styleInternal="max-w-[90%] min-w-[90%]  max-h-[90%] min-h-[90%] md:max-w-[600px]  md:min-w-[600px] relative"
        >
          <RegrasCardComponent handleCloseregrasModal={handleCloseregrasModal} />
        </ModalComponent>
      )} */
}
