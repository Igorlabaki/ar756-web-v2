import { SectionComponent } from "../utils/section";

export  function VideobgComponent() {
  return (
    <SectionComponent classname="object-cover">
     <video className="max-h-full min-h-screen min-w-screen object-cover" src={"/assets/video/videoBg.mp4"} autoPlay loop muted/>
    </SectionComponent>
  );
}
