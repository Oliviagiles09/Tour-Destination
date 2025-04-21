import React, { useEffect, useState } from "react";
import TourCard from "./TourCard";

const TourList = ({ tours, setTours, onRemove }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchTours = async () => {
        try {
            const response = await fetch("https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project");
            if (!response.ok) {
                throw new Error("Failed to fetch tours");
            }
            const data = await response.json();
            setTours(data);
        } catch (error) {
            setError(true);
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTours();
    }, []);
    if (loading) {
        return <h2>Loading...</h2>;
    }
    if (error) {
        return <h2>Something went wrong...</h2>;
    }
    if (tours.length === 0) {
        return (
            <div className="no-tours">
                <h2>No Tours Available</h2>
                <button onClick={fetchTours} className="refresh-btn">Refresh</button>
            </div>
        );
    }
    return (
        <section className="tour-list">
            {tours.map((tour) => {
                return (
                    <TourCard
                        key={tour.id} 
                        {...tour} 
                        onRemove={onRemove}
                    />
                );
            })}
        </section>
    );
};

export default TourList;