import { HomeHeaderComponent } from "@/components/header";
import { VideobgComponent } from "@/components/welcome/videobg";

export default function Home() {
  return (
    <main className="bg-faixada flex flex-col flex-1 bg-gray-300 min-h-screen w-full">
      <HomeHeaderComponent />
      <VideobgComponent />
    </main>
  );
}
