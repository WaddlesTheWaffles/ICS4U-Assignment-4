import './PolynomialFunction.css'
import { useState } from 'react'


function PolynomialFunction() {
    const [coefficentsAsStr, setcoefficentAsStr] = useState("");
    const [exponentsAsStr, setexponentsAsStr] = useState("");
    const [xValue, setxValue] = useState("");
    const [fullPolyFunc, setfullPolyFunc] = useState("");
    const [xCalculated, setxCalculated] = useState("");

    function polynomialFunction(e) {
        e.preventDefault();
        let coefficents = coefficentsAsStr.split(" ");
        let exponents = exponentsAsStr.split(" ");
        let polynomialFullFunction = "f(x) = ";

        //Creates Equation
        for (let i = 0; i < coefficents.length; i++) {
            let tempValue = parseFloat(coefficents[i]);

            if (tempValue < 0) {
                polynomialFullFunction += coefficents[i] + "x^" + exponents[i];
            } else if (i != 0) {
                polynomialFullFunction += "+" + coefficents[i] + "x^" + exponents[i];
            } else {
                polynomialFullFunction += coefficents[i] + "x^" + exponents[i];
            }
        }
        let yValue = 0;

        //Calculates X value
        for (let i = 0; i < coefficents.length; i++) {
            yValue += parseFloat(coefficents[i]) * Math.pow(xValue, parseFloat(exponents[i]));
        }

        setfullPolyFunc(polynomialFullFunction);
        setxCalculated("f(" + xValue + ") = " + yValue)
    }
    return (
        <form className='calculator' onSubmit={(e) => polynomialFunction(e)}>
            <h1 className='inCalculator'>Polynomial Function</h1>
            <label className='inCalculator'>Coefficents:</label>
            <input required className='inCalculator' type='text' value={coefficentsAsStr} onChange={(event) => { setcoefficentAsStr(String(event.target.value)) }} />
            <label className='inCalculator'> Exponents:</label>
            <input required className='inCalculator' type='text' value={exponentsAsStr} onChange={(event) => { setexponentsAsStr(String(event.target.value)) }} />
            <label className='inCalculator'>X Value:</label>
            <input required className='inCalculator' type='number' value={xValue} onChange={(event) => { setxValue(Number(event.target.value)) }} />

            <label className='inCalculator'>Polynomial Function (Results;)</label>
            <input readOnly className='inCalculator' type='text' value={fullPolyFunc} />
            <label className='inCalculator'>Polynomial Evaluation (Results:)</label>
            <input readOnly className='inCalculator' type='text' value={xCalculated} />
            <input id='calculateButton' className='inCalculator' type='submit' value="Calculate" />
        </form>
    )
}

export default PolynomialFunction