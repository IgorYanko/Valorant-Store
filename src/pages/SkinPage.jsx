import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Header, Navbar, Footer, ErrorPage } from '../components'
import { useSkin } from '../hooks/useSkin'
import { getSkinPrice, getSkinRarity } from '../utils/price-calculator'
import { getChromaImageUrl, getChromaVideoUrl } from '../utils/skin-video'

export default function SkinPage() {
  const { uuid } = useParams()
  const { skin, loading, error } = useSkin(uuid)
  const [viewMode, setViewMode] = useState('video')
  const [selectedChromaUuid, setSelectedChromaUuid] = useState(null)

  if (loading) {
    return <div className="app-loading">Carregando skin...</div>
  }

  if (error || !skin) {
    return <ErrorPage message={error ?? 'Skin não encontrada.'} />
  }

  const chromas = skin.chromas ?? []
  const selectedChroma =
    chromas.find((chroma) => chroma.uuid === selectedChromaUuid) ??
    chromas[0] ??
    null

  const imageUrl = getChromaImageUrl(selectedChroma, skin)
  const videoUrl = getChromaVideoUrl(selectedChroma, skin)
  const hasVideo = Boolean(videoUrl)
  const showVideo = viewMode === 'video' && hasVideo

  const price = getSkinPrice(skin.contentTierUuid)
  const rarity = getSkinRarity(skin.contentTierUuid)

  return (
    <>
      <Header />
      <Navbar />
      <main className="skin-page">
        <Link to="/" className="skin-page-back">
          ← Voltar para a loja
        </Link>

        <div className="skin-page-content">
          <div className="skin-page-media-column">
            <div className="skin-page-media">
              {showVideo ? (
                <video
                  key={videoUrl}
                  className="skin-page-video"
                  src={videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                />
              ) : (
                <img
                  key={imageUrl}
                  className="skin-page-image"
                  src={imageUrl}
                  alt={selectedChroma?.displayName ?? skin.displayName}
                />
              )}
            </div>

            {hasVideo && (
              <div className="skin-page-view-switch" role="group" aria-label="Modo de visualização">
                <button
                  type="button"
                  className={viewMode === 'image' ? 'active' : ''}
                  onClick={() => setViewMode('image')}
                >
                  Imagem
                </button>
                <button
                  type="button"
                  className={viewMode === 'video' ? 'active' : ''}
                  onClick={() => setViewMode('video')}
                >
                  Vídeo
                </button>
              </div>
            )}

            {chromas.length > 0 && (
              <div className="skin-page-chromas" role="list" aria-label="Variantes">
                {chromas.map((chroma) => {
                  const swatch =
                    chroma.swatch ?? chroma.displayIcon ?? chroma.fullRender

                  return (
                    <button
                      key={chroma.uuid}
                      type="button"
                      role="listitem"
                      className={
                        selectedChroma?.uuid === chroma.uuid ? 'active' : ''
                      }
                      title={chroma.displayName}
                      aria-label={chroma.displayName}
                      aria-pressed={selectedChroma?.uuid === chroma.uuid}
                      onClick={() => setSelectedChromaUuid(chroma.uuid)}
                    >
                      {swatch ? (
                        <img src={swatch} alt="" />
                      ) : (
                        <span className="skin-page-chroma-fallback" />
                      )}
                    </button>
                  )
                })}
              </div>
            )}
          </div>

          <div className="skin-page-info">
            <h1>{skin.displayName}</h1>
            {selectedChroma && chromas.length > 1 && (
              <p className="skin-page-chroma-name">{selectedChroma.displayName}</p>
            )}
            <dl className="skin-page-details">
              <div>
                <dt>Raridade</dt>
                <dd>{rarity}</dd>
              </div>
              <div>
                <dt>Preço</dt>
                <dd>{price ? `R$ ${price}` : '—'}</dd>
              </div>
              <div>
                <dt>Níveis</dt>
                <dd>{skin.levels?.length ?? 0}</dd>
              </div>
              <div>
                <dt>Variantes</dt>
                <dd>{chromas.length}</dd>
              </div>
            </dl>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
