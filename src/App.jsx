
// import './index.css';

import { Route, Routes } from "react-router-dom"
import Home from "./views/Home";
import About from "./views/About";
import NavBar from "./components/NavBar/NavBar";
import Categories from "./views/Categories";
import DrinkDetails from "./views/DrinkDetails";
import Footer from "./components/Footer/Footer";
import RandomDrink from "./views/RandomDrink";
import FavoriteDrinks from "./views/FavoriteDrinks";


function App() {
  return (
    <div className="flex flex-col min-h-screen bg-wallpaper font-roboto">
      <NavBar />
      <main className="flex-grow">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/drink/:id' element={<DrinkDetails />} />
          <Route path='/about' element={<About />} />
          <Route path='/random' element={<RandomDrink />} />
          <Route path='/favorites' element={<FavoriteDrinks />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App