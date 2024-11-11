import './AmbiguousCase.css'
import { useState } from 'react'

function AmbiguousCase() {
    const [angleA, setangleA] = useState();
    const [sideA, setsideA] = useState();
    const [sideB, setsideB] = useState();
    const [triangleType, settriangleType] = useState();

    function ambiguousCase(e) {
        e.preventDefault();
        let height = Math.round(sideB * Math.sin(angleA * Math.PI / 180))

        if (angleA <= 90) {
            if (sideA < height) {
                settriangleType("No Triangle");
            } else if (sideA == height) {
                settriangleType("Right Triangle");
            } else if (sideA > sideB) {
                settriangleType("One Triangle");
            } else if (sideA > height && sideA < sideB) {
                settriangleType("Two Triangle");
            } else {
                settriangleType("ERROR");
            }
        } else if (angleA > 90) {
            if (sideA <= sideB) {
                settriangleType("No Triangle");
            } else if (sideA > sideB) {
                settriangleType("One Triangle");
            } else {
                settriangleType("Error");
            }
        }
    }
    return (
        <form onSubmit={(e) => ambiguousCase(e)}>
            <h1>Ambiguous Case</h1>
            <label>Angle A:</label>
            <input required type='number' value={angleA} onChange={(event) => { setangleA(Number(event.target.value)) }} />
            <label>Side A:</label>
            <input required type='number' value={sideA} onChange={(event) => { setsideA(Number(event.target.value)) }} />
            <label>Side B:</label>
            <input required type='number' value={sideB} onChange={(event) => { setsideB(Number(event.target.value)) }} />

            <label>Triangle Type (Results):</label>
            <input readOnly type='text' value={triangleType} />
            <input type='submit' value="Calculate" />
        </form>
    )
}

export default AmbiguousCase