export default function AboutPage() {
  return (
    <section className="about-page">
      <h1>Sobre o projeto</h1>
      <p>
        A Valorant Store é um projeto acadêmico desenvolvido em React para
        praticar consumo de APIs, roteamento com React Router e
        gerenciamento de estado com Context API. Os dados de skins, cromas e
        vídeos de apresentação são consumidos diretamente da API pública do Valorant.
      </p>

      <div className="about-grid">
        <div className="about-card">
          <h2>Tecnologias</h2>
          <ul>
            <li>React + Vite</li>
            <li>React Router</li>
            <li>Context API</li>
            <li>Valorant-API (dados públicos)</li>
          </ul>
        </div>

        <div className="about-card">
          <h2>Funcionalidades</h2>
          <ul>
            <li>Catálogo de skins com busca e paginação</li>
            <li>Carrossel com skins em destaque</li>
            <li>Página de detalhes com vídeo e variantes (cromas)</li>
            <li>Preços e raridades simulados</li>
          </ul>
        </div>
      </div>

      <p className="about-disclaimer">
        Este é um projeto sem fins comerciais e não possui qualquer vínculo
        oficial com a Riot Games ou o jogo VALORANT.
      </p>

      <p className="about-credits">
        Desenvolvido por Igor Yanko Corrêa Lemes e João Pedro da Costa
        Figueiredo.
      </p>
    </section>
    
  )
}