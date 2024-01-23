import { ImageType } from "@/types";
import { WelcomeCarroucelComponent } from "./carroucel";
import { WelcomeGridComponent } from "./grid";
import { WelcomeHeaderComponent } from "./welcomeHeader";
import { WelcomeTextsComponent } from "./welcomeTexts";

import { SectionComponent } from "@/components/utils/section";
import { ShowOnlyOnMobileComponent } from "@/components/utils/showOnlyOnMobile";
import { ShowOnlyOnWebComponent } from "@/components/utils/showOnlyOnWeb";

export async function WelcomeComponent() {

  const welcomeMobileImageList: ImageType[] = await fetch(
    `${process.env.BASE_URL}/image/getByTag?tag=Grid&responsiveMode=mobile`,
    {
      method: "GET",
      cache: "no-cache",
    }
  ).then((resp) => resp.json());

  const welcomeWebImageList: ImageType[] = await fetch(
    `${process.env.BASE_URL}/image/getByTag?tag=Grid&responsiveMode=web`,
    {
      method: "GET",
      cache: "no-cache",
    }
  ).then((resp) => resp.json());
    console.log(welcomeWebImageList)
  return (
    <SectionComponent classname="pt-10 flex flex-col justify-between pb-3">
      <span>
        <WelcomeHeaderComponent />
        <WelcomeTextsComponent />
      </span>
      <ShowOnlyOnMobileComponent>
        <WelcomeCarroucelComponent imageList={welcomeMobileImageList} />
      </ShowOnlyOnMobileComponent>
      <ShowOnlyOnWebComponent>
        <WelcomeGridComponent imageList={welcomeWebImageList} />
      </ShowOnlyOnWebComponent>
    </SectionComponent>
  );
}
