import './NewtonMethod.css'
import { useState } from 'react'

function NewtonMethod() {
    const [rootGuess, setrootGuess] = useState();
    const [rootAprox, setrootAprox] = useState();

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
        <form>
{/* finish laater */}
        </form>
    )
}