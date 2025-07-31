import { Route, Routes } from "react-router-dom";
import AddCategory from "./components/AddCategory/AddCategory";
import WrehouseProvider from "./components/WrehouseProvider";
import WrehouseList from "./components/WrehouseList";
import AddProduct from "./components/AddProduct/AddProduct";
import Home from "./pages/Home";

function App() {
  return (
    <div className="overflow-hidden ">
      <Routes>
        <Route path="/" element={<WrehouseProvider />}>
          <Route index element={<Home />} />
          <Route path="/one" element={<AddProduct />} />
          <Route path="/wrehouse-list" element={<WrehouseList />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
