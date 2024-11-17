import './NewtonMethod.css'
import { useState } from 'react'

function NewtonMethod() {
    const [rootGuess, setrootGuess] = useState("");
    const [rootAprox, setrootAprox] = useState("");

    function newtonMethod(e) {
        e.preventDefault();
        let x0 = rootGuess, x1, f, f1;

        while (true) {
            f = 6 * Math.pow(x0, 4) - 13 * Math.pow(x0, 3) - 18 * Math.pow(x0, 2) + 7 * x0 + 6;
            f1 = 24 * Math.pow(x0, 3) - 39 * Math.pow(x0, 2) - 36 * x0 + 7

            x1 = x0 - f / f1;

            if (x0 - x1 < 0.00001) {
                break;
            } else {
                x0 = x1;
            }
        }
        setrootAprox(x1);
    }
    return (
        <form className='calculator' onSubmit={e => newtonMethod(e)}>
            <h1 className='inCalculator'>Newton's Method</h1>
            <label className='inCalculator'>Root Guess:</label>
            <input required className='inCalculator' type='number' value={rootGuess} onChange={(event) => { setrootGuess(Number(event.target.value)) }} />

            <label className='inCalculator'>Root Approximation (Results):</label>
            <input readOnly className='inCalculator' type='text' value={rootAprox} />
            <input id='calculateButton' className='inCalculator' type='submit' value="Calculate" />
        </form>
    )
}

export default NewtonMethod