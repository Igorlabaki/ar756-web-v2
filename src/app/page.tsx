import { ComodidadeComponent } from "@/components/comodidades";
import { ExploreComponent } from "@/components/explore";
import { FooterComponent } from "@/components/footer";
import { HomeHeaderComponent } from "@/components/header";
import { ServicosComponents } from "@/components/servicos/servicos";
import { ShowOnlyOnWebComponent } from "@/components/utils/showOnlyOnWeb";
import { VideobgComponent } from "@/components/video/videobg";
import { WelcomeComponent } from "@/components/welcome";

export   default async function Home() {
  const cardImageList = await fetch(
    `${process.env.BASE_URL}/image/getByTag/Card/Web`,
    {
      method: "GET",
      cache: "no-cache",
    }
  ).then(async (resp) => {
    return await resp.json();
  });

  const imageList = await fetch(
    `${process.env.BASE_URL}/image/list`,
    {
      method: "GET",
      cache: "no-cache",
    }
  ).then(async (resp) => {
    return await resp.json();
  });

  const questionList = await fetch(
    `${process.env.BASE_URL}/question/list`,
    {
      method: "GET",
      cache: "no-cache",
    }
  ).then(async (resp) => {
    return await resp.json();
  });

  const textRegrasList = await fetch(
    `${process.env.BASE_URL}/text/getByArea/regras`,
    {
      method: "GET",
      cache: "no-cache",
    }
  ).then(async (resp) => {
    return await resp.json();
  });

  const textSobreList = await fetch(
    `${process.env.BASE_URL}/text/getByArea/sobre`,
    {
      method: "GET",
      cache: "no-cache",
    }
  ).then(async (resp) => {
    return await resp.json();
  });

  return (
    <main className="bg-faixada flex flex-col flex-1 bg-gray-300 min-h-screen w-full">
      <HomeHeaderComponent />
      <VideobgComponent/>
      <WelcomeComponent/>
      <ShowOnlyOnWebComponent>
        <ComodidadeComponent />
       <ServicosComponents />
      </ShowOnlyOnWebComponent>
      <ExploreComponent cardImageList={cardImageList} imageList={imageList} questionList={questionList} textRegrasList={textRegrasList} textSobreList={textSobreList}/>
      <FooterComponent />
    </main>
  );
}
