import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CloseButtonComponent from "@/components/utils/closeButton";
import { ImageComponent } from "@/components/utils/image";
import { TextType } from "@/types";
import Scrollbars from "react-custom-scrollbars";

interface RegrasProps {
  handleCloseRegrasModal: () => void;
  textRegrasList: TextType[];
  textSobreList: TextType[];
}

export function RegrasCardComponent({
  handleCloseRegrasModal,
  textRegrasList,
  textSobreList,
}: RegrasProps) {
  const [ar756ModalMode, setAr756ModalMode] = useState<"SOBRE" | "REGRAS">(
    "SOBRE"
  );

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Função para verificar se a tela é pequena ou grande
  const checkScreenSize = () => {
    setIsSmallScreen(window.innerWidth <= 768); // Por exemplo, consideramos 768px como o ponto de corte para ser uma tela pequena
  };

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

  return (
    <div className=" w-screen h-full min-h-full bg-white  relative rounded-md py-5 px-5 flex flex-col gap-y-5 md:mt-2 scrollbar-thin scrollbar-rounded-[2rem] scrollbar-thumb-gray-400 scrollbar-track-gray-100 scrollbar-rounded-full">
      <CloseButtonComponent handleCloseModal={handleCloseRegrasModal} />
      <div className="flex items-center justify-center w-full">
        <ImageComponent
          alt={"logo"}
          h={"h-[100px] md:h-[180px]"}
          w={"w-[100px] md:w-[250px]"}
          src={
            "https://res.cloudinary.com/dcjkvwbvh/image/upload/v1688637347/onbridge/uswu0yqtfeo2aq3vomkf.png"
          }
          containerClassname={"z-20 rounded-md -ml-2  "}
        />
      </div>
      <div className="flex gap-x-5 font-semibold text-[12px] md:text-[14px] mb-5 relative">
        <p
          className={`relative cursor-pointer tracking-[0.10rem] ${
            ar756ModalMode.includes("SOBRE") &&
            "after:absolute after:bottom-0 after:left-0 after:w-full after:h-[0.05rem] after:bg-black"
          }`}
          onClick={() => setAr756ModalMode("SOBRE")}
        >
          SOBRE
        </p>
        <p
          className={`relative cursor-pointer tracking-[0.10rem] ${
            ar756ModalMode.includes("REGRAS") &&
            "after:absolute after:bottom-0 after:left-0 after:w-full after:h-[0.05rem] after:bg-black"
          }`}
          onClick={() => setAr756ModalMode("REGRAS")}
        >
          REGRAS
        </p>
      </div>
      {ar756ModalMode.includes("SOBRE") && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: ar756ModalMode.includes("SOBRE") ? 1 : 0,
            transition: { duration: 0.5 },
          }}
          className="flex flex-col items-start justify-center gap-x-3 gap-y-4 text-[13px] md:text-[15px] text-justify"
        >
          {textSobreList &&
            textSobreList.map((item: TextType) => {
              return (
                <div key={item?.id} className="flex flex-col gap-y-2">
                  <p
                    className={`${
                      item?.titulo?.includes("footer") && "hidden"
                    } font-semibold text-[14px] md:text-[18px]`}
                  >
                    {item?.titulo}
                  </p>
                  <p
                    className={`${
                      item?.titulo?.includes("footer") &&
                      "text-[14px] md:text-[16px] font-semibold mb-5 mt-3"
                    }`}
                  >
                    {item?.text}
                  </p>
                </div>
              );
            })}
        </motion.div>
      )}
      {ar756ModalMode.includes("REGRAS") && (
        <Scrollbars
          style={{
            width: "100%",
            height: 500,
            gap: 20,
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: ar756ModalMode.includes("REGRAS") ? 1 : 0,
              transition: { duration: 0.5 },
            }}
            className="flex flex-col gap-y-2 text-[13px] md:text-[14px] text-justify"
          >
            {textRegrasList &&
              textRegrasList.map((item: TextType, index: number) => {
                return (
                  <div
                    key={item?.id}
                    className="flex gap-x-2 justify-start items-start text-justify w-[95%]"
                  >
                    <p
                      className={`${
                        item?.titulo?.includes("footer") && "hidden"
                      } font-semibold text-[14px] md:text-[14px] flex`}
                    >{`${index + 1}.`}</p>
                    <p
                      className={`${
                        item?.titulo?.includes("footer") &&
                        "text-[14px] md:text-[16px] font-semibold mb-5 mt-3"
                      }`}
                    >
                      {item?.text}
                    </p>
                  </div>
                );
              })}
          </motion.div>
        </Scrollbars>
      )}
    </div>
  );
}
