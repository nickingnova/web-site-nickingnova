import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Project';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom'




function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <div class="container">
            <div class="header">
              <Header/>
            </div>
            <main class="main-content">
              <Route path="/web-site-nickingnova/" component={Home} />
              <Route path="/projects" component={Projects} />
              {/*<Route path="/web-site-nickingnova/contact" component={Contact} /> */}
            </main>
            <footer class="footer">
              <Footer/>
            </footer>
          </div>
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
