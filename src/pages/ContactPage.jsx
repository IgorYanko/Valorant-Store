import { Users } from 'lucide-react'

const CREATORS = [
  {
    name: 'João Pedro da Costa Figueiredo',
    github: 'https://github.com/Joaopedrofig',
  },
  {
    name: 'Igor Yanko Correa Lemes',
    github: 'https://github.com/IgorYanko',
  }
]

export default function ContactPage() {
  return (
    <section className="contact-page">
      <div className="contact-header">
        <h1>Quem Somos</h1>
        <p>
          Bem-vindo à Valorant Store! Este projeto foi desenvolvido como parte de um 
          estudo prático de desenvolvimento web. Abaixo você pode conhecer os criadores 
          por trás da loja e acessar nossos perfis.
        </p>
      </div>

      <hr className="contact-divider" />

      <div className="creators-section">
        <h2>
          <Users size={22} style={{ marginRight: '8px', display: 'inline-block', verticalAlign: 'middle' }} /> 
          Criadores do Projeto
        </h2>
        
        <div className="creators-grid">
          {CREATORS.map((creator, index) => (
            <div key={index} className="creator-card">
              <h3>{creator.name}</h3>
              
              <div className="creator-links">
                <a 
                  href={creator.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="creator-link"
                >
                  <span>GitHub ↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}