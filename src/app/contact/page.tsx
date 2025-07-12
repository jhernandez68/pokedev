import { FaFacebook, FaInstagram, FaHome } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contacto</h2>
      <ul className="contact-info">
        <li>📧 <a href="mailto:pokedev2025@gmail.com">pokedev2025@gmail.com</a></li>
        <li>📞 +57 300 000 0000</li>
        <li>📍 Bogotá, Colombia</li>
      </ul>
      <h3>Síguenos en</h3>
      <ul className="social-list">
        <li><a href="https://www.facebook.com/profile.php?id=61571973494882" target="_blank" rel="noopener noreferrer"><FaFacebook />Facebook</a></li>
        <li><a href="https://www.instagram.com/pokedev2025/" target="_blank" rel="noopener noreferrer"><FaInstagram />Instagram</a></li>
        <li><a href="#" target="_blank" rel="noopener noreferrer"><FaHome />Página principal (próximamente)</a></li>
      </ul>
    </section>
  )
}
