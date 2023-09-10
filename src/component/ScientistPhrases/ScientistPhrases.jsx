import { useEffect, useState } from "react";
import { frases } from "../../data/data";
import "./ScientistPhrases.css";


const ScientistOhrases = () => {


  const [randomIndex, setRandomIndex]=useState(null)
  useEffect(()=>{
    const randomIdx = Math.floor(Math.random() * frases.length);
    setRandomIndex(randomIdx);
  },[])


  return (
    <section className="fg-scientist-container">
      <h2>Mentes cosmicas: cientificos que iluminaron el Universo</h2>
      {randomIndex!==null?(<div className="fg-subcontainer-scientist">
        <div className="fg-scientist-left">

          <div className="fg-scientist-img">
            <img src={frases[randomIndex].img} alt={frases[randomIndex].cientifico} />
          </div>
          <p className="fg-name-scientist">{frases[randomIndex].cientifico}</p>
        </div>
        <div className="fg-scientist-right">
        <p className="fg-text-scientist">"{frases[randomIndex].frase}"</p>
        <p className="fg-year-phrase">{frases[randomIndex].fechaFrase}</p>
      </div>
      </div>):(<div><h2>No tengo datos</h2></div>)}
      
      
    </section>
  );
};

export default ScientistOhrases;
