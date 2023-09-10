import "./Hero.css"

const Hero = () => {
  return (
    <section  className="fg-hero-container">
    <div className="fg-hero-logo">
      <img
        src="https://res.cloudinary.com/di49fnkc8/image/upload/v1685283970/web%20nasa/NASA_logo_loxv6l.svg"
        alt="logo de la nasa"
      />
    </div>
    <p className="fg-hero-text">
      Explora el universo como nunca antes con CosmicSnap. Ingresa una fecha
      y sumérgete en el pasado cósmico a través de imágenes cautivadoras.
      Descubre eventos celestiales, curiosidades y maravillas que ocurrieron
      en días específicos. Desde el nacimiento de estrellas hasta fenómenos
      galácticos, desbloquea los secretos del cosmos con solo un clic.
      ¡Únete a nosotros en este emocionante viaje estelar con CosmicSnap hoy
      mismo!
    </p>
  </section>
   
  )
}

export default Hero