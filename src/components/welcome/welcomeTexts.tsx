import { AnimatedVerticalComponent } from '@/components/utils/animatedVertical';
import { TextType } from '@/types';


export async function WelcomeTextsComponent() {
  const welcomeTexts: TextType[] = await fetch(
    `${process.env.BASE_URL}/api/text/getByArea?area${'welcome'}`,
    {
      method: 'GET',
      cache: 'no-cache',
    },
  ).then((resp) => resp.json());

  return (
    <div className="flex flex-col gap-y-2 mt-10">
      {welcomeTexts.map((text: TextType) => {
        return (
          <AnimatedVerticalComponent
            key={text.id}
            className="w-[90%] mx-auto text-justify text-sm md:text-[18px] md:w-[60%] md:text-center"
          >
            <p>{text.text}</p>
          </AnimatedVerticalComponent>
        );
      })}
    </div>
  );
}
