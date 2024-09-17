import React from 'react';
import Header from './components/Header';
import HeroImage from './components/HeroImage';
import CardList from './components/CardList';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import { articles, tutorials } from './data';
import './App.css'; 
function App() {
  return (
    <div className="App">
      <Header />
      <HeroImage />
      <h2>Featured Articles</h2>
      <CardList items={articles} type="article" />
      <div className="button-container">
        <button className="app-button">See All Articles</button>
      </div>
      <h2>Featured Tutorials</h2>
      <CardList items={tutorials} type="tutorial" />
      <div className="button-container">
        <button className="app-button">See All Tutorials</button>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
