import "./Result.css";

const Result = ({data}) => {
  return (
    <div className="fg-result">
      <h2>{data.title}</h2>
      <div className="fg-api-img">
      <img src={data.url} alt="foto resultado API" />
      </div>
      <p>{data.copyright}</p>
      <p className="fg-photo-explanation">{data.explanation}</p>
    </div>
  );
};

export default Result;
