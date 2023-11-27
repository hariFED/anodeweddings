import Home from "./pages/Home"
import Wedding from "./pages/Wedding"

import ServicesWedding from "./pages/ServicesWedding";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {

  return (
    <>
      <Router>
        
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/services/weddings" element={<ServicesWedding />} />

        </Routes>
      </Router>
    </>
  )
}

export default App
