import './App.css';
import HeaderSection from './components/header-section/HeaderSection';
import NavBar from './components/navbar/NavBar';
import SearchBar from './components/search-bar/SearchBar';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <HeaderSection/>
     <SearchBar/>
    </div>
  );
}

export default App;
