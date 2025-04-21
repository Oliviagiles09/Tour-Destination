import React, { useState } from 'react';
import TourList from './components/gallery';
import DestinationSelector from './components/DestinationSelector';
import './style/styles.css'; // importing the style css 

function App() {
  const [tours, setTours] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState("");

  const removeTour = (id) => {
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
  };
  const filteredTours = selectedDestination
  ? tours.filter((tour) => tour.name === selectedDestination)
  : tours;

  return (
    <>
      <h1>Tour Explorer</h1>
      <DestinationSelector
          tours={tours}
          onDestinationChange={setSelectedDestination}
          />
      <TourList tours={filteredTours} setTours={setTours} onRemove={onRemove} />
    </>
  );
}

export default App;