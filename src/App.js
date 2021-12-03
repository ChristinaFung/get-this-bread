import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SelectionMenu from './components/SelectionMenu/SelectionMenu';
import Recommendations from './components/Recommendations/Recommendations';
import Footer from './components/Footer/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [
        {
          id: 'placeholder-id',
          name: 'Placeholder Restaurant',
          display_phone: "+1 123-456-7890",
          price: "$$$$",
          rating: "5",
          url: "#",
          location: {
            formatted_address: "1 Test Street, Toronto, ON XXX XXX"
          },
          photos: ["http://placehold.it/300x300"]
        }
      ]
    }

    this.setResults = this.setResults.bind(this);
  }

  setResults = (data) => {
    this.setState({ results: data });
  }

  render() {
    return (
      <div className="app">
        <div className="app-content">
          <Header/>
          <SelectionMenu setResults={this.setResults}/>
          <Recommendations results={this.state.results}/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
