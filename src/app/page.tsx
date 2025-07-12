import Link from 'next/link'

export default function Home() {
  return (
    <section className="hero">
      <h1>PokeDev</h1>
      <p>Soluciones de software a medida para impulsar tu negocio</p>
      <Link href="/services" className="btn">Nuestros Servicios</Link>
    </section>
  )
}
