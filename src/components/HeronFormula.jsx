import './HeronFormula.css'
import { useState } from 'react'

function HeronFormula() {
    const [sideA, setsideA] = useState();
    const [sideB, setsideB] = useState();
    const [sideC, setsideC] = useState();
    const [area, setarea] = useState("");

    function heronFormula(e) {
        e.preventDefault();
        setarea(0.25 * Math.sqrt(4 * Math.pow(sideA, 2) * Math.pow(sideB, 2) - Math.pow(Math.pow(sideA, 2) + Math.pow(sideB, 2) - Math.pow(sideC, 2), 2)));
    }
    return (
        <form onSubmit={(e) => heronFormula(e)}>
            <h1>Heron's Formula</h1>
            <label>Side A:</label>
            <input required type='number' value={sideA} onChange={(event) => { setsideA(Number(event.target.value)) }} />
            <label>Side B:</label>
            <input required type='number' value={sideB} onChange={(event) => { setsideB(Number(event.target.value)) }} />
            <label>Side C:</label>
            <input required type='number' value={sideC} onChange={(event) => { setsideC(Number(event.target.value)) }} />

            <label>Area (Results):</label>
            <input readOnly type='text' value={area} />
            <input type='submit' value="Calculate" />
        </form>
    )
}

export default HeronFormula;