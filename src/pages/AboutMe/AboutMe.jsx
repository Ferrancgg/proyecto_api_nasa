
import Container1 from "../../component/Container1/Container1";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <main className="fg-about-me">
      <h1>QUIEN SOY....</h1>
      <Container1
        text={
          "¡Hola! Soy Ferran Gómez Galán, un fisioterapeuta con una pasión por el desarrollo de software y la tecnología. Con 44 años de edad y una rica trayectoria en el campo de la salud y la educación, he decidido embarcarme en un emocionante viaje de transformación hacia el mundo del desarrollo full stack."
        }
      />

      <Container1
        title={"MI TRAYECTORIA"}
        text={
          "Con más de 15 años de experiencia como fisioterapeuta, he tenido el honor de atender y ayudar a numerosos pacientes en mi consulta privada. A lo largo de los años, he sido testigo de historias de superación y he tenido el privilegio de contribuir a la recuperación y bienestar de mis pacientes. Además de mi trabajo en consulta, también he dedicado 10 años a la docencia universitaria en el ámbito de la fisioterapia y la osteopatía. Compartir mi conocimiento y experiencia con futuros profesionales de la salud ha sido una parte gratificante de mi carrera."
        }
      />

      <Container1
        title={"MI NUEVA PASIÓN: DESARROLLO FULL STACK"}
        text={
          "Aunque mi experiencia en el mundo de la salud ha sido invaluable, recientemente he decidido explorar una nueva pasión: el desarrollo de software. Mi deseo de aprender y evolucionar me llevó a embarcarme en el emocionante camino del desarrollo full stack. A través de rigurosos cursos y proyectos desafiantes, he adquirido habilidades en lenguajes de programación como JavaScript y Python, así como en tecnologías web modernas como React y Node.js. Mi objetivo es fusionar mi experiencia en el cuidado de la salud con la tecnología para crear soluciones innovadoras que beneficien a las personas de formas nuevas y emocionantes."
        }
      />

      <Container1
        title={"MI VISIÓN"}
        text={
          "Mi visión es aprovechar mi experiencia en fisioterapia y desarrollo de software para crear aplicaciones y plataformas que promuevan la salud y el bienestar. Ya sea diseñando herramientas de seguimiento de ejercicio, plataformas educativas en línea o soluciones de telemedicina, aspiro a utilizar mis habilidades para marcar una diferencia en la vida de las personas."
        }
      />

      <Container1
        title={"¡HABLAMOS!"}
        text={
          "Estoy emocionado por las oportunidades que el desarrollo full stack me brinda y estoy abierto a colaboraciones, proyectos y oportunidades que combinen mis habilidades en fisioterapia y tecnología. Si estás interesado en conectarte, colaborar o simplemente conversar, ¡no dudes en contactarme a través de mi correo electrónico ferrancgg@gmail.com o mis redes sociales!¡Espero tener la oportunidad de trabajar juntos y explorar cómo podemos marcar una diferencia en el mundo!"
        }
      />
    </main>
  );
};

export default AboutMe;
