import './HeronFormula.css'
import { useState } from 'react'

function HeronFormula() {
    const [sideA, setsideA] = useState("");
    const [sideB, setsideB] = useState("");
    const [sideC, setsideC] = useState("");
    const [area, setarea] = useState("");

    function heronFormula(e) {
        e.preventDefault();
        setarea(0.25 * Math.sqrt(4 * Math.pow(sideA, 2) * Math.pow(sideB, 2) - Math.pow(Math.pow(sideA, 2) + Math.pow(sideB, 2) - Math.pow(sideC, 2), 2)));
    }
    return (
        <form className='calculator' onSubmit={(e) => heronFormula(e)}>
            <h1 className='inCalculator'>Heron's Formula</h1>
            <label className='inCalculator'>Side A:</label>
            <input required className='inCalculator' type='number' value={sideA} onChange={(event) => { setsideA(Number(event.target.value)) }} />
            <label className='inCalculator'>Side B:</label>
            <input required className='inCalculator' type='number' value={sideB} onChange={(event) => { setsideB(Number(event.target.value)) }} />
            <label className='inCalculator'>Side C:</label>
            <input required className='inCalculator' type='number' value={sideC} onChange={(event) => { setsideC(Number(event.target.value)) }} />

            <label className='inCalculator'>Area (Results):</label>
            <input readOnly className='inCalculator' type='text' value={area} />
            <input id='calculateButton' className='inCalculator' type='submit' value="Calculate" />
        </form>
    )
}

export default HeronFormula;