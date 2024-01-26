import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Scrollbars from "react-custom-scrollbars";
import { ImageType } from "@/types";
import ImageLoadingComponent from "@/components/utils/imageLoading";
import { ImageComponent } from "@/components/utils/image";
import { GridModalComponent } from "@/components/welcome/grid/gridModal";

interface GaleriaListProps {
  galeriaModalMode: string;
  imageList: ImageType[] | undefined;
}

export default function GaleriaListComponent({
  galeriaModalMode,
  imageList,
}: GaleriaListProps) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Função para verificar se a tela é pequena ou grande
  const checkScreenSize = () => {
    setIsSmallScreen(window.innerWidth <= 768); // Por exemplo, consideramos 768px como o ponto de corte para ser uma tela pequena
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Executa a função ao montar o componente
  useEffect(() => {
    checkScreenSize();

    // Adiciona um listener para verificar quando a tela for redimensionada
    window.addEventListener("resize", checkScreenSize);

    // Remove o listener ao desmontar o componente para evitar vazamentos de memória
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);
  /* 
    if(imageListIsLoading){
        return (
          <ImageLoadingComponent/>
        )
    } */

  return (
    <Scrollbars
      style={{
        width: "100%",
        height: isSmallScreen ? 550 : 600,
        gap: 20,
      }}
    >
      <div className="flex flex-wrap items-center justify-center w-full gap-2 md:gap-1 pb-5 md:pb-0 ">
        {imageList &&
          imageList.map((item: ImageType, index: number) => {
            if (
              !galeriaModalMode
                .toLocaleLowerCase()
                .includes(item.area.toLocaleLowerCase()) &&
              !galeriaModalMode.includes("TODAS")
            ) {
              return;
            }
            return (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 1 },
                  }}
                  /*                onClick={handleOpenModal} */
                  key={item.imageUrl}
                  className="overflow-hidden rounded-lg shadow-pics cursor-pointer"
                  onClick={() => setIsModalOpen(true)}
                >
                  <ImageComponent
                    alt={""}
                    h={"h-[200px] md:h-[180px]"}
                    w={"w-[395px] md:w-[250px]"}
                    src={`${item.imageUrl}`}
                    containerClassname={" rounded-lg "}
                  />
                </motion.div>
                {isModalOpen && (
                  <GridModalComponent
                    key={index}
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                    imageId={item.id}
                    imageList={imageList}
                  />
                )}
              </>
            );
          })}
      </div>
    </Scrollbars>
  );
}
