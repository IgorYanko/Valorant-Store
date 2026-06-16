import { Link } from 'react-router-dom'
import { getSkinPrice } from '../utils/price-calculator'

export const SkinCard = ({ skin }) => {
  return (
    <Link to={`/skin/${skin.uuid}`} className="skin-card">
      <img src={skin.displayIcon} alt={skin.displayName} />
      <h1>{skin.displayName}</h1>
      <p>R$ {getSkinPrice(skin.contentTierUuid) || "—"}</p>
    </Link>
  )
}