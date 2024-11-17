import './AmbiguousCase.css'
import { useState } from 'react'

function AmbiguousCase() {
    const [angleA, setangleA] = useState("");
    const [sideA, setsideA] = useState("");
    const [sideB, setsideB] = useState("");
    const [triangleType, settriangleType] = useState("");

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
        <form className='calculator' onSubmit={(e) => ambiguousCase(e)}>
            <h1 className='inCalculator'>Ambiguous Case</h1>
            <label className='inCalculator'>Angle A:</label>
            <input required className='inCalculator' type='number' value={angleA} onChange={(event) => { setangleA(Number(event.target.value)) }} />
            <label className='inCalculator'>Side A:</label>
            <input required className='inCalculator' type='number' value={sideA} onChange={(event) => { setsideA(Number(event.target.value)) }} />
            <label className='inCalculator'>Side B:</label>
            <input required className='inCalculator' type='number' value={sideB} onChange={(event) => { setsideB(Number(event.target.value)) }} />

            <label className='inCalculator'>Triangle Type (Results):</label>
            <input readOnly className='inCalculator' type='text' value={triangleType} />
            <input id='calculateButton' className='inCalculator' type='submit' value="Calculate" />
        </form>
    )
}

export default AmbiguousCase