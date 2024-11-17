import './App.css'
import HeronFormula from './components/HeronFormula.jsx'
import AmbiguousCase from './components/AmbiguousCase.jsx';
import NewtonMethod from './components/NewtonMethod.jsx';
import PolynomialFunction from './components/PolynomialFunction.jsx';

function App() {

    return (
        <div>
            <h1 className ="title" >Formula Calculators</h1>
            <div className ="formulaCalculator">
                <HeronFormula />
                <AmbiguousCase />
                <NewtonMethod />
                <PolynomialFunction />
            </div>
        </div>
    )
}

export default App;