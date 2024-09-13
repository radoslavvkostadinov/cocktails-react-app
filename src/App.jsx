
// import './index.css';

import { Route, Routes } from "react-router-dom"
import Home from "./views/Home";
import About from "./views/About";
import NavBar from "./components/NavBar/NavBar";
import Categories from "./views/Categories";
import DrinkDetails from "./views/DrinkDetails";
import Footer from "./components/Footer/Footer";


function App() {


  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/drink/:id' element={<DrinkDetails />} />
        {/* <Route path='/random' element={<RandomDrink />} /> */}
        <Route path='/about' element={<About />} />
        {/* <Route path='/*' element={<NoMatch />} /> */}
      </Routes>
      {/* <Drinks /> */}
      <Footer />
    </>
  )
}

export default App