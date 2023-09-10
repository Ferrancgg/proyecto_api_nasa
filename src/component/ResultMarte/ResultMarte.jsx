import NoData from "../NoData/NoData";
import "./ResultMarte.css";

const ResultMarte = ({data}) => {

  if (!data || !data.photos || data.photos.length === 0) {
    return <NoData/>;
  }
  const firstPhoto = data.photos[0];

  return (
    <div className="fg-result-marte">
      <h2>El planeta rojo</h2>
      <div className="fg-api-img">
        <img src={firstPhoto.img_src} alt="foto resultado Api" />
      </div>
      <p>{firstPhoto.camera.full_name}</p>
      <p className="fg-photo-explanation">esta imagen es de marte</p>
    </div>
  );
};

export default ResultMarte;
