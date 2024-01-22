import { HomeHeaderComponent } from "@/components/header";
import { VideobgComponent } from "@/components/welcome/videobg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HomeHeaderComponent />
      <VideobgComponent />
    </main>
  );
}
