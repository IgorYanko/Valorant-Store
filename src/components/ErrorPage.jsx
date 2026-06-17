import { Link } from 'react-router-dom'

export const ErrorPage = ({ message = 'Algo deu errado.' }) => {
  return (
    <div className="error-page">
      <h1>Ops!</h1>
      <p>{message}</p>
      <Link to="/" className="error-page-link">
        Voltar para o início
      </Link>
    </div>
  )
}