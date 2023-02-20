import "./App.css";
import Categories from "./components/categories/Categories";
import ProductSection from "./components/product-section/ProductSection";
import HeaderSection from "./components/header-section/HeaderSection";
import NavBar from "./components/navbar/NavBar";
import SearchBar from "./components/search-bar/SearchBar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeaderSection />
      <SearchBar />
      <Categories />
      <ProductSection />
      <Footer />
    </div>
  );
}

export default App;
