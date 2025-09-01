import Navbar from "./navbar";
import Hero from "./hero";
import Sobrenosotros from "./sobrenosotros";
import Certificado from "./certificado";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Sobrenosotros />
      <Certificado />
    </div>
  );
}
