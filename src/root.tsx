import Header from "./components/Header";
import Home from "./pages/Home";
import Select from "./pages/Select";
import Meal from "./pages/Meal";
import Meals from "./pages/Meals";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Header/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/select" element={<Select/>}/>
          <Route path="/select/c" element={<Select getDataBy={"c"}/>}/>
          <Route path="/select/a" element={<Select getDataBy={"a"}/>}/>
          <Route path="/select/c/:name" element={<Meals type={"c"}/>}/>
          <Route path="/select/a/:name" element={<Meals type={"a"}/>}/>
          <Route path="/select/i" element={<Select getDataBy={"i"}/>}/>
          <Route path="/meal/:meal_id" element={<Meal/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;