import React from 'react';
import "./styles/Home.css"
import Header from './Header';
import Footer from './Footer';
import Main from './Main';


const Home = () => {
    return (
        <div class="container">
          <div class="header">
            <Header/>
          </div>
          <main class="main-content">
            <Main/>
          </main>
          <footer class="footer">
            <Footer/>
          </footer>
        </div>
    );
}

export default Home;
