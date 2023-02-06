import Home from './components/Home';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>
    <Switch>
      <div className="App">
        <Route path="/web-site-nickingnova/" component={Home} />
        {/* <Home/>  */}
      </div>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
