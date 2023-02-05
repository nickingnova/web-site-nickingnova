import Home from './components/Home';
import './App.css';
import { BrowserRouter} from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Route exact path="/home" component={Home} /> */}
        <Home/>
      </div>
    </BrowserRouter>
  );
}

export default App;
