
// import './index.css';

import { Route, Routes } from "react-router-dom"
import Home from "./views/Home";
import About from "./views/About";
import NavBar from "./components/NavBar/NavBar";
import Categories from "./views/Categories";


function App() {


  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories' element={<Categories />} />
        {/* <Route path='/random' element={<RandomDrink />} /> */}
        <Route path='/about' element={<About />} />
      </Routes>
      {/* <Drinks /> */}
    </>
  )
}

export default App