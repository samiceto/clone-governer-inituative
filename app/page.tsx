import { Nav } from "./components/nav";
import { Bg } from "./components/bg"
import { Peragraph } from "./components/peragraph";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="overflow-x-clip">
    <Nav />
    <Bg />
    <Peragraph />
    <Footer />
    </div>
  );
}
