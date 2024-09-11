
// import './index.css';

import { Route, Routes, useLocation } from "react-router-dom"
import Drinks from "./components/BestSellers/BestSellers";
import Home from "./views/Home";


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/drinks' element={<Drinks />} /> */}
        {/* <Route path='/random' element={<RandomDrink />} /> */}
        {/* <Route path='/about' element={<About />} /> */}
      </Routes>
      <Drinks />
    </>
  )
}

export default App