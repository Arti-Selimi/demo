import Image from "next/image";
import Navbar from "@/components/navbar/navbar";
import Main from "@/components/main/main";
import ShowcaseMain from "@/components/showcase/showcase_main";

export default function Home() {
  return (
    <div className="bg-main">
      <Navbar />
      <Main />
      <ShowcaseMain />
    </div>
  );
}
