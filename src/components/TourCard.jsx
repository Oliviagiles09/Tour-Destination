import React, { useSate } from "react";

const TourCard = ({ tour, removeTour }) => {
  return (
    <div className="tour-card">
      <img src={tour.image} alt={tour.name} />
      <div className="tour-info">
        <h3>{tour.name}</h3>
        <p>{tour.info}</p>
        <p className="tour-price">{tour.price}</p>
        <button onClick={() => removeTour(tour.id)}>Not Interested</button>
      </div>
    </div>
  );
};

export default TourCard;