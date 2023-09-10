import "./Container.css"

const Container = () => {
  return (
    <div className="fg-container">
        
        <div className="fg-container-container">
          <h2>Descubre las maravillas del universo con imágenes como estas:</h2>
            <div className="container-img-carrusell">
              <div className="container-img"><img src="https://res.cloudinary.com/di49fnkc8/image/upload/v1690093848/casa_elements-Small_ofmmxl.webp" alt="imagen" /></div>
              <div className="container-img"><img src="https://res.cloudinary.com/di49fnkc8/image/upload/v1690093858/images_lwm2r0.jpg" alt="imagen" /></div>
              <div className="container-img"><img src="https://res.cloudinary.com/di49fnkc8/image/upload/v1690093776/APOD_2019-04-03_q2egg0.jpg" alt="imagen" /></div>
              <div className="container-img"><img src="https://res.cloudinary.com/di49fnkc8/image/upload/v1690093792/APOD_2014-08-21_opz3sg.jpg" alt="imagen" /></div>
                
                
                
                
            </div>
            <h3> Elige un día y que tipo de imágenes quieres descubrir. Te apetece dejarte sorprender con una imagen del servidor de la NASA o te apetece descubrir una imagen desde el robot que hay en MARTE. No esperes más y disfruta</h3>
            
        </div>
    </div>
  )
}

export default Container