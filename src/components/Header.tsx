// src/components/Header.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import '../app/globals.css'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const toggleMenu = () => setOpen(o => !o)
  const closeMenu = () => setOpen(false)

  return (
    <>
      <header>
        <div className="header-brand">
          <Link href="/" onClick={closeMenu}>
            <img src="./icon.png" alt="Logo PokeDev" width="60" height="60" />
          </Link>
          <Link href="/" className="logo-text" onClick={closeMenu}>
            PokeDev
          </Link>
        </div>

        <nav className="desktop-nav">
          <ul>
            <li><Link href="/" onClick={closeMenu}>Inicio</Link></li>
            <li><Link href="/services" onClick={closeMenu}>Servicios</Link></li>
            <li><Link href="/contact" onClick={closeMenu}>Contacto</Link></li>
          </ul>
        </nav>

        <div className="menu-icon" onClick={toggleMenu}>
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </header>

      {open && <div className="overlay" onClick={closeMenu} />}

      <aside className={`sidebar ${open ? 'open' : ''}`}>
        <ul>
          <li><Link href="/pokedev/" onClick={closeMenu}>Inicio</Link></li>
          <li><Link href="/pokedev/services" onClick={closeMenu}>Servicios</Link></li>
          <li><Link href="/pokedev/contact" onClick={closeMenu}>Contacto</Link></li>
        </ul>
      </aside>
    </>
  )
}
