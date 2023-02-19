import "./App.css";
import Categories from "./components/categories/Categories";
import ProductSection from "./components/product-section/ProductSection";
import HeaderSection from "./components/header-section/HeaderSection";
import NavBar from "./components/navbar/NavBar";
import SearchBar from "./components/search-bar/SearchBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeaderSection />
      <SearchBar />
      <Categories />
      <ProductSection />
    </div>
  );
}

export default App;
