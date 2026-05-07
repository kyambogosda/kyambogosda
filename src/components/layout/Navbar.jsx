import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const navItems = [
  { label: 'Home',        path: '/' },
  { label: 'About',       path: '/about' },
  { label: 'Sermons',     path: '/sermons' },
  { label: 'Ministries',  path: '/ministries' },
  { label: 'Events',      path: '/events' },
  { label: 'Give',        path: '/give' },
  { label: 'Contact',     path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-gold flex items-center justify-center shrink-0">
            <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
              <path d="M20 4L20 36M4 20H36M12 8L28 32M28 8L12 32" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div>
            <div className={`font-heading font-bold text-base leading-tight transition-colors duration-300 ${scrolled ? 'text-primary' : 'text-white'}`}>
              Kyambogo SDA
            </div>
            <div className={`text-xs tracking-widest uppercase font-medium transition-colors duration-300 ${scrolled ? 'text-gold' : 'text-gold'}`}>
              Church
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `text-xs font-semibold tracking-[0.12em] uppercase transition-colors duration-200 ${
                  isActive
                    ? 'text-gold border-b-2 border-gold pb-0.5'
                    : scrolled ? 'text-primary hover:text-gold' : 'text-white hover:text-gold'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA Button */}
        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center gap-2 bg-gold text-white text-xs font-bold tracking-widest uppercase px-5 py-2.5 border-2 border-gold hover:bg-transparent hover:text-gold transition-all duration-300"
        >
          Plan a Visit
        </Link>

        {/* Mobile toggle */}
        <button
          id="mobile-menu-toggle"
          className={`lg:hidden text-2xl transition-colors duration-200 ${scrolled ? 'text-primary' : 'text-white'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="flex flex-col py-4 px-6 gap-1">
            {navItems.map(item => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `py-3 px-2 text-sm font-semibold tracking-widest uppercase border-b border-gray-50 transition-colors duration-200 ${
                    isActive ? 'text-gold' : 'text-primary hover:text-gold'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-3 bg-gold text-white text-center text-xs font-bold tracking-widest uppercase px-5 py-3 hover:bg-primary transition-colors duration-300"
            >
              Plan a Visit
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
