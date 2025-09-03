import Brochure from "../brochure";
import Footer from "../footer";
import Navbar from "../navbar";
import HeroProyectos from "./hero";
import Proyecto from "./proyectos";


const Projects = () => {
  return (
    <div className="bg-white">
      <Navbar />
       
     <HeroProyectos />
     <Proyecto />

      <Footer />
    </div>
  );
};

export default Projects;
