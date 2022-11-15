import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Place from "./Place";

const App = () => {
  
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/place" element={<Place />}/>
        </Routes> 
    </>
  )
}

export default App