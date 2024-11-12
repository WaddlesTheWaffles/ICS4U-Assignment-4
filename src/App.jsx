import './App.css'
import HeronFormula from './components/HeronFormula.jsx'
import AmbiguousCase from './components/AmbiguousCase.jsx';
import NewtonMethod from './components/NewtonMethod.jsx';

function App() {

    return (
        <div>
            <HeronFormula />
            <AmbiguousCase />
            <NewtonMethod />
        </div>
    )
}

export default App;