import './App.css';
import Header from './components/Header/Header';
import SelectionMenu from './components/SelectionMenu/SelectionMenu';
import Recommendations from './components/Recommendations/Recommendations';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className="content-wrapper cf">
        <h1>Let's get this bread!</h1>
        <Header/>
        <SelectionMenu/>
        <Recommendations/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
