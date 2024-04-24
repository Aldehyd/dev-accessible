import { useState, useEffect, useRef } from "react"

export default function PricesSimulatorProgressBar({simulation}): React.JSX.Element {

    const [progression,setProgression] = useState<number>(0);
    const [barWidth,setBarWidth] = useState<number>(0);

    const progressBar = useRef(null);

    useEffect(()=> {
        setProgression(simulation.currentPage/(simulation.totalPages+1));
    },[simulation]);

    useEffect(()=> {
        setBarWidth(progressBar.current?.offsetWidth * progression);
    },[progression]);
    
    return (
        <div className="progress-bar" ref={progressBar}>
            <div className="progress-bar_bar" style={{width: barWidth}}></div>
        </div>
    )
}