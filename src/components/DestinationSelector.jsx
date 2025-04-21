import React, { useState } from "react";

const DestinationSelector = ({ tours, onDestinationChange }) => {
    const [selectedDestination, setSelectedDestination] = useState("");

    const uniqueDestinations = [
        "All Destinations",
        ...new Set(
            tours.map((tour) => {
                const words = tour.name.split(" "); 
                return words[2] || "";
            }).filter((destination) => destination)
        ),
    ];

    const handleChange = (event) => {
        const destination = event.target.value;
        setSelectedDestination(destination);
        onDestinationChange(destination === "All Destinations" ? "" : destination);
    };

    return (
        <div className="destination-selector">
            <label htmlFor="destination">Select a Destination: </label>
            <select
                id="destination"
                value={selectedDestination}
                onChange={handleChange}
            >
                {uniqueDestinations.map((destination) => (
                    <option key={destination} value={destination}>
                        {destination}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default DestinationSelector;