import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Banking from './components/Banking';
import Header from './components/Header';
import Balance from './components/Balance';

function App() {
  return (
    <div className="section">
   <Header/>
   <Balance/>
   <Banking/>
    </div>
  );
}

export default App;
