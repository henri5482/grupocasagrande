import Footer from "../footer";
import Navbar from "../navbar";
import HeroServicios from "./hero";
import Servicios from "./servicios";


const Projects = () => {
  return (
    <div className="bg-white">
      <Navbar />


      <HeroServicios />
      <Servicios />

      <Footer />
    </div>
  );
};

export default Projects;
