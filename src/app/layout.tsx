import './globals.css'
import Link from 'next/link'
import Header from '../components/Header'
import { FaFacebook, FaInstagram, FaHome } from 'react-icons/fa'

export const metadata = {
  title: 'PokeDev',
  description: 'Startup de desarrollo de software'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Header />
        <main>{children}</main>
        <footer>
          <div className="footer-container">
            <div className="footer-section">
              <h3>Sobre PokeDev</h3>
              <p>En PokeDev somos especialistas en crear soluciones de software a medida. Nuestro equipo apasionado está listo para llevar tu proyecto al siguiente nivel.</p>
            </div>
            <div className="footer-section">
              <h3>Enlaces</h3>
              <ul>
                <li><Link href="/">Inicio</Link></li>
                <li><Link href="/services">Servicios</Link></li>
                <li><Link href="/contact">Contacto</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Contacto</h3>
              <p>Email: <a href="mailto:pokedev2025@gmail.com">pokedev2025@gmail.com</a></p>
              <p>Teléfono: +57 300 000 0000</p>
              <p>Dirección: Bogotá, Colombia</p>
              <div className="footer-social">
                <a href="https://www.facebook.com/profile.php?id=61571973494882" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                <a href="https://www.instagram.com/pokedev2025/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><FaHome /></a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 PokeDev. Todos los derechos reservados.</p>
          </div>
        </footer>
      </body>
    </html>
)
}
