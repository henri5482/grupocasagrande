import Navbar from "./navbar";
import Hero from "./hero";
import Sobrenosotros from "./sobrenosotros";
import Certificado from "./certificado";
import Numeros from "./numeros";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Sobrenosotros />
      <Certificado />
      <Numeros />
    </div>
  );
}
