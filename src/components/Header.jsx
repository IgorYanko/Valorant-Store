import valorantLogo from '../../public/valorant.jpg'

export const Header = () => {
  return (
    <div className="header">
      <img src={valorantLogo} alt="Valorant Logo" />
      <h1>Valorant Store</h1>
    </div>
  )
}