import { FilterGroup, SkinList } from '../components'

export default function SkinsPage() {
  return (
    <section className="skins-page">
      <h1 className="skins-page-title">Catálogo de Skins</h1>
      <FilterGroup />
      <SkinList />
    </section>
  )
}