import Image from "next/image";
import { Nav } from "./components/nav";
import { Bg } from "./components/bg"
import { Peragraph } from "./components/peragraph";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
    <Nav />
    <Bg />
    <Peragraph />
    <Footer />
    </div>
  );
}
