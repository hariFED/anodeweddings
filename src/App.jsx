import Home from "./pages/Home"
import SalamonBharathiAlbum from "./pages/SalamonBharathiAlbum"

import ServicesWedding from "./pages/ServicesWedding";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import KathirShaliniAlbum from "./pages/KathirShalini";




function App() {

  return (
    <>
      <Router>

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/services/weddings" element={<ServicesWedding />} />
          <Route path="/services/weddings/salamonandbharathi" element={<SalamonBharathiAlbum />} />
          <Route path="/services/weddings/kathirshalini" element={<KathirShaliniAlbum />} />

        </Routes>
      </Router>
    </>
  )
}

export default App
