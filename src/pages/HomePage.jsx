import { Link } from "react-router-dom";
import { Carousel } from "../components";

export default function HomePage() {
  return (
    <>
      <Carousel />

      <section className="hero">
        <h1>Sua loja de skins do VALORANT</h1>
        <p>
          Explore o catálogo completo de skins, veja vídeos de apresentação,
          variantes de cromas e preços simulados — com dados obtidos em tempo
          real da API pública da Valorant.
        </p>
        <Link to="/skins" className="hero-cta">
          Ver todas as skins
        </Link>
      </section>
    </>
  );
}
