import React, { useSate } from "react";

function TourCard({ id, name, info, price, image, onRemove }) {
    const [readMore, setReadMore] = useState(false);

    return (
        <artical className="tour">
            <img src={image} alt={name} />
            <footer>
                <div className="tour-info">
                    <h4 className="tour-price">${price}</h4>
                </div>
                <p>
                    {readMore ? info : '${info.substring(0, 150)}...'}
                    <button onClick={() => setReadMore(!readMore)}>
                        {readMore ? "Show Less" : "Read More"}
                    </button>
                </p>
                <button onClick={() => onRemove(id)} className="delete-btn">
                    Not Interested
                </button>
            </footer>
        </artical>
    );
}

export default Tourcard;