import './App.css'
import HeronFormula from './components/HeronFormula.jsx'
import AmbiguousCase from './components/AmbiguousCase.jsx';
import NewtonMethod from './components/NewtonMethod.jsx';
import PolynomialFunction from './components/PolynomialFunction.jsx';

function App() {

    return (
        <div>
            <HeronFormula />
            <AmbiguousCase />
            <NewtonMethod />
            <PolynomialFunction />
        </div>
    )
}

export default App;