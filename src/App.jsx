import React, { useState } from 'react';
import Gallery from './components/gallery';
const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://course-api.com/react-tours-project')
      .then((response) => response.json())
      .then((data) => {
        setTours(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };
  const refreshTours = () => {
    setLoading(true);
    setError(null);
    fetch('https://course-api.com/react-tours-project')
      .then((response) => response.json())
      .then((data) => {
        setTours(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error fetching tours: {error.message}</h2>;
  }
  return (
    <div className="App">
      {tours.length === 0 ? (
        <div>
          <h2>No tours left!</h2>
          <button onClick={refreshTours}>Refresh</button>
        </div>
      ) : (
        <Gallery tours={tours} removeTour={removeTour} />
      )}
    </div>
  );
};

export default App;