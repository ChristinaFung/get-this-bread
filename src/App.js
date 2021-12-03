import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SelectionMenu from './components/SelectionMenu/SelectionMenu';
import Recommendations from './components/Recommendations/Recommendations';
import Footer from './components/Footer/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="app-content">
          <Header/>
          <SelectionMenu/>
          <Recommendations/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
