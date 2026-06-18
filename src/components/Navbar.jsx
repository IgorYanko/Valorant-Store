import { NavLink } from 'react-router-dom'

const NAV_ITEMS = [
  { to: '/', label: 'Início', end: true },
  { to: '/skins', label: 'Skins' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/contato', label: 'Contato' },
]

export const Navbar = () => {
  return (
    <nav className="navbar">
      {NAV_ITEMS.map(({ to, label, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          {label}
        </NavLink>
      ))}
    </nav>
  )
}