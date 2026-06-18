import { Link } from 'react-router-dom'
import { getSkinPrice } from '../utils/price-calculator'
import { SkinImage } from './SkinImage'

export const SkinCard = ({ skin }) => {
  return (
    <Link to={`/skin/${skin.uuid}`} className="skin-card">
      <SkinImage skin={skin} alt={skin.displayName} />
      <h1>{skin.displayName}</h1>
      <p>R$ {getSkinPrice(skin.contentTierUuid) || "—"}</p>
    </Link>
  )
}