// import Buscador from "../Buscador/Buscador";
// import NoData from "../NoData/NoData";
import { useState } from "react";
import Result from "../Result/Result";
import "./ResultApi.css";
import { today } from "../../data/data";
import NoData from "../NoData/NoData";
import ResultMarte from "../ResultMarte/ResultMarte";
import useFetch from "../../api/useFetch";

const ResultApi = () => {
  const [date, setDate] = useState(today);
  const [apiUrl, setApiUrl] = useState(
    `https://api.nasa.gov/planetary/apod?date=${date}&api_key=vM6LOdhWFgosMgj5S5xzNPFj5KIJeGviD4FbsaIe`
  );
  const { data, loading } = useFetch(apiUrl);

  const onBttNasaClick = () => {
    setApiUrl(
      `https://api.nasa.gov/planetary/apod?date=${date}&api_key=vM6LOdhWFgosMgj5S5xzNPFj5KIJeGviD4FbsaIe`
    );
  };

  const onBttMarteClick = () => {
    setApiUrl(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=vM6LOdhWFgosMgj5S5xzNPFj5KIJeGviD4FbsaIe`
    );
  };


    
   

  

  if (loading) {
    return (
      <section className="fg-resultApi-container">
        <div className="fg-subcontainer-result">
          <h2>......... buscando</h2>
        </div>
      </section>
    );
  }

  return (
    <section className="fg-resultApi-container">
      <div className="fg-subcontainer-result">
        <div className="fg-buscador-container">
          <div className="fg-buscador">
            <h3>BUSCADOR</h3>

            <input
              type="date"
              value={date}
              onChange={(ev) => setDate(ev.target.value)}
            />
            <div className="fg-buscador-btt">
              {/* <button>NASA</button>
              <button>MARTE</button> */}
              <button onClick={onBttNasaClick}>NASA</button>
              <button onClick={onBttMarteClick}>MARTE</button>
            </div>
          </div>
          <div className="fg-planet">
            <div className="fg-planet-img">
              {apiUrl.includes("planetary")?<img src="https://res.cloudinary.com/di49fnkc8/image/upload/v1693638212/web%20nasa/telescopio_ib1upd.png" alt="" />:<img src="https://res.cloudinary.com/di49fnkc8/image/upload/v1693638129/web%20nasa/marte_tl0b2i.png" alt="" />}
            </div>
            <div className="fg-general-info-container">
              <p>{today}</p>
              
            </div>
          </div>
        </div>

        {(apiUrl.includes("planetary") && data.code === 400) ||
        (apiUrl.includes("mars-photos") &&
          data.photos &&
          data.photos.length === 0) ? (
          <NoData />
        ) : apiUrl.includes("planetary") ? (
          <Result data={data} />
        ) : (
          <ResultMarte data={data} />
        )}
      </div>
    </section>
  );
};

export default ResultApi;
