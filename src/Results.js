import React from "react";
import { useState, useEffect } from "react";
import './index.css';

const Results = ({ score }) => {

    const [rank, setRank] = useState(null);

    useEffect(() => {
        if (score < 300) {
            setRank("Rapid Reflex");
        } else if (score < 400) {
            setRank("Fast Reflex");
        } else {
            setRank("Slow Reflex");
        }
    }, [score]);

    return (
        <div className="results">
            <p>Reaction time is :  {score} milliseconds</p>
            <p className="rank">  {rank}</p>
        </div>
    );

}
export default Results;