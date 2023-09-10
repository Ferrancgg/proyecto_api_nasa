import "./NoData.css"

const NoData = () => {
  return (
    <div className="fg-nodata-container">
        <h2>Ohhh , parece que no tengo datos</h2>
        <div className="fg-no-data-img">
          <img src="https://res.cloudinary.com/di49fnkc8/image/upload/v1693639523/web%20nasa/tierra_j24oo4.png" alt="planeta llorando imagen" />

        </div>

        <h2> no te desanimes y elige otra fecha </h2>
    </div>
  )
}

export default NoData