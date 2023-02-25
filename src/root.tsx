import Header from "./components/Header";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Meal from "./pages/Meal";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route element={<Header/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/categories" element={<Categories/>}/>
          <Route path="/meal/:meal_id" element={<Meal/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;