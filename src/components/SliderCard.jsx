import { useEffect, useState } from "react";
import "../styles/slider-card.css";

const SliderCard = ({ data }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [currentIndex, data]);

    return (
        <div className="slider-card">
            <div className="slider-card-container">
                {data.map((item, index) => (
                    <div key={index} className={`slider-card-item ${index === currentIndex ? 'active' : ''}`}>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
            <div className="slider-card-controls">
                <button onClick={handlePrev}>Previous</button>
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    );
}

export default SliderCard