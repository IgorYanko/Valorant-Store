import { Link } from 'react-router-dom'
import { getSkinPrice, getSkinRarity } from '../utils/price-calculator'
import { SkinImage } from '../components'

export const SkinCard = ({ skin }) => {
  const rarity = getSkinRarity(skin.contentTierUuid)
  const price = getSkinPrice(skin.contentTierUuid)

  return (
    <Link to={`/skin/${skin.uuid}`} className="skin-card" data-rarity={rarity}>
      {rarity !== 'Unknown' && <span className="skin-card-rarity">{rarity}</span>}
      <SkinImage skin={skin} alt={skin.displayName} />
      <h1>{skin.displayName}</h1>
      <p>{price ? `R$ ${price}` : '—'}</p>
    </Link>
  )
}
