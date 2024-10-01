import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NavBar from './components/NavBar/NavBar';
import Categories from './pages/Categories';
import DrinkDetails from './pages/DrinkDetails';
import Footer from './components/Footer/Footer';
import RandomDrink from './pages/RandomDrink';
import FavoriteDrinks from './pages/FavoriteDrinks';
import SearchDrinks from './pages/SearchDrinks';
import NonAlcoholicDrinks from './pages/NonAlcoholicDrinks';
import PageNotFound from './pages/PageNotFound';

const App: React.FC = () => {
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
          <Route path='/search' element={<SearchDrinks />} />
          <Route path='/non-alcoholic' element={<NonAlcoholicDrinks />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;