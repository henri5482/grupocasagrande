import Footer from "../footer";
import Navbar from "../navbar";
import Familia from "./familia";
import HeroNosotros from "./hero";
import Trayectoria from "./trayectoria";
import Valores from "./valores";

const Projects = () => {
  return (
    <div className="bg-white">
      <Navbar />


      <HeroNosotros />
      <Familia />
      <Valores />
      <Trayectoria />


      <Footer />
    </div>
  );
};

export default Projects;
