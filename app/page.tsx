import { Nav } from "./components/nav";
import { Bg } from "./components/bg"
import { Peragraph } from "./components/peragraph";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="overflow-x-clip m-0 p-0">
    <Nav />
    <Bg />
    <Peragraph />
    <Footer />
    </div>
  );
}
