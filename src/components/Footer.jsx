import { Link } from 'react-router-dom'
import { ArrowUp } from 'lucide-react'

export const Footer = () => {
  const year = new Date().getFullYear()

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>VALORANT STORE</h2>
          <p>
            Loja fictícia desenvolvida para fins de estudo, utilizando dados
            da API pública da Valorant.
          </p>
        </div>

        <div className="footer-links">
          <h3>Navegação</h3>
          <Link to="/">Início</Link>
          <Link to="/skins">Skins</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/contato">Contato</Link>
        </div>

        <div className="footer-links">
          <h3>Créditos</h3>
          <a href="https://valorant-api.com" target="_blank" rel="noopener noreferrer">
            valorant-api.com
          </a>
          <a href="https://playvalorant.com" target="_blank" rel="noopener noreferrer">
            VALORANT oficial
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {year} Valorant Store — projeto acadêmico, sem vínculo com a Riot Games.
        </p>
        <button
          type="button"
          className="footer-top-btn"
          onClick={handleScrollTop}
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  )
}