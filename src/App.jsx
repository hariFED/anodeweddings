import Home from "./pages/Home"
import SalamonBharathiAlbum from "./pages/SalamonBharathiAlbum"
import ServicesWedding from "./pages/ServicesWedding";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import KathirShaliniAlbum from "./pages/KathirShalini";
import AlifyaAlbum from "./pages/Alfiya";
import Photographers from "./pages/Photographers";
import Blogs from "./pages/Blogs";




function App() {

  return (
    <>
      <Router>

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/services/weddings" element={<ServicesWedding />} />
          <Route path="/photographers" element={<Photographers />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/services/weddings/salamonandbharathi" element={<SalamonBharathiAlbum />} />
          <Route path="/services/weddings/kathirshalini" element={<KathirShaliniAlbum />} />
          <Route path="/services/weddings/alifya" element={<AlifyaAlbum />} />

        </Routes>
      </Router>
    </>
  )
}

export default App
