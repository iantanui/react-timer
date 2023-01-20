import { useState, useEffect } from "react";


function Block({ delay, onEnd }) {

    const [startTime, setStartTime] = useState(null);
    const [showBlock, setShowBlock] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setStartTime(performance.now())
            setShowBlock(true);
        }, 5000);
    }, [delay]);

    const stopTimer = () => {
        setShowBlock(false);
        const endTime = performance.now();
        onEnd(endTime - startTime);
    };

    return (
        <div className="block">
            {showBlock ?
                <button onClick={stopTimer} >Click</button>
                : null
            }
        </div>

    );


}
export default Block;