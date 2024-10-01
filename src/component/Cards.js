import { useState } from "react";

const Cards = ({ id, image, name, info, price, removeTour }) => {
  const [readmore, setReadmore] = useState(false);
  const description = readmore ? info : `${info.substring(0, 200)}...`;

  function readmoreHandler() {
    setReadmore(!readmore);
  }

  return (
    <>
      <div className="card">
        <img src={image} className="image"></img>
        <div className="tour-details">
          <div className="tour-price">$ {price}</div>
          <div className="tour-name">{name}</div>
        </div>
        <div className="description">
          {description}
          <span className="read-more" onClick={readmoreHandler}>
            {readmore ? "show less" : "readmore"}
          </span>
        </div>
        <button className="btn-red" onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </div>
    </>
  );
};

export default Cards;
