import Container from "../../component/Container/Container";
import Hero from "../../component/Hero/Hero";
import ResultApi from "../../component/ResultApi/ResultApi";
import ScientistPhrases from "../../component/ScientistPhrases/ScientistPhrases";
import TittleH1 from "../../component/TittleH1/TittleH1";
import "./Home.css";

const Home = () => {
  return (
    <div className="fg-home">
      <TittleH1
        name={"CosmicSnap: "}
        text={"Viaja en el Tiempo a Través del Universo en Imágenes"}
      />
      <Hero />
      <ScientistPhrases />
      <Container />
      <ResultApi />
    </div>
  );
};

export default Home;
