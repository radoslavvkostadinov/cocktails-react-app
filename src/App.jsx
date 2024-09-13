
// import './index.css';

import { Route, Routes } from "react-router-dom"
import Home from "./views/Home";
import About from "./views/About";
import NavBar from "./components/NavBar/NavBar";
import Categories from "./views/Categories";
import DrinkDetails from "./views/DrinkDetails";
import Footer from "./components/Footer/Footer";
import RandomDrink from "./views/RandomDrink";


function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <NavBar />
      <main className="flex-grow">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/drink/:id' element={<DrinkDetails />} />
          <Route path='/about' element={<About />} />
          <Route path='/random' element={<RandomDrink />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App