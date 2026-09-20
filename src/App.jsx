import { Routes, Route } from "react-router";
import DetailsPage from "./pages/details";
import FavoritePage from "./pages/favorite";
import HomePage from "./pages/home";
import Navbar from "./component/navbar/navbar";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/recipe-item/:id" element={<DetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
