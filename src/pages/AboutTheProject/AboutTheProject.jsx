// import Container1 from "../../components/Container1/Container1"
import Container1 from "../../component/Container1/Container1"
import "./AboutTheProject.css"

const AboutTheProject = () => {
  return (
    <main className="fg-proyect">
      <h1>SOBRE ESTE PROYECTO</h1>

      <div className="fg-proyect-container">
        

        <Container1 text={"¡Bienvenidos a mi ventana al cosmos! Esta es una muestra de mi pasión por la tecnología y mi habilidad para enfrentar desafíos en el mundo de la programación. Permítanme compartir con ustedes cómo este proyecto demostró mis capacidades y creatividad."}/>
        <Container1 title={"Conectando Mundos Distintos en una Página Web"} text={"Una de las proezas más emocionantes que enfrenté al crear esta página web fue la integración de dos fuentes de datos muy diferentes: la API de Marte y la API de la NASA. Coordinar y presentar esta información de manera coherente requirió habilidades de desarrollo avanzadas y una comprensión profunda de la tecnología. Este proyecto destaca mi capacidad para trabajar con diversas API y mi habilidad para convertir datos complejos en experiencias de usuario intuitivas."}/>
        <Container1 title={"Componentización: Mi Enfoque en la Estructura"} text={"Para ofrecer una experiencia de usuario fluida y amigable, diseñé componentes reutilizables que permiten a los visitantes del sitio buscar y explorar datos astronómicos de manera eficiente. La componetización no solo hizo que el código fuera más organizado y mantenible, sino que también demuestra mi experiencia en el desarrollo de aplicaciones React."}/>
        <Container1 title={"Inspiración de las Grandes Mentes Científicas"} text={" Además de las consultas a las API y la estructura de componentes, incorporé una sección de frases de científicos destacados. Esto no solo agrega profundidad y significado al proyecto, sino que también muestra mi aprecio por la ciencia y la historia de la astronomía.Este proyecto refleja mi capacidad para abordar problemas complejos y mi pasión por crear experiencias significativas en línea. Espero que disfruten explorando este rincón del espacio tanto como yo disfruté creándolo. ¡Aventurémonos juntos en el universo digital! "}/>
       

      </div>
      
    </main>
  )
}

export default AboutTheProject