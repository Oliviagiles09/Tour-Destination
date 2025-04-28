import React, { useEffect, useState } from "react";
import TourCard from "./TourCard";
const Gallery = ({ tours, onRemoveTour }) => {
  return (
    <div className="gallery">
      {/* Map over the tours array and render a TourCard for each tour */}
      {tours.map((tour) => (
        <TourCard
          key={tour.id}
          id={tour.id}
          name={tour.name}
          info={tour.info}
          image={tour.image}
          price={tour.price}
          onRemove={onRemoveTour}
        />
      ))}
    </div>
  );
};

export default Gallery;