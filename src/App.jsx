import { Route, Routes } from "react-router-dom";
import AddCategory from "./components/AddCategory/AddCategory";
import WrehouseProvider from "./components/WarehouseProvider";
import AddProduct from "./components/AddProduct/AddProduct";
import Home from "./pages/Home";
import WarehoueseList from "./components/WarehouseList/WarehouseList";
import WarehouseList from "./components/WarehouseList/WarehouseList";

function App() {
  return (
    <div className="overflow-hidden min-h-screen bg-slate-900">
      <Routes>
        <Route path="/" element={<WrehouseProvider />}>
          <Route index element={<Home />} />
          <Route path="/list" element={<WarehouseList />} />
          <Route path="/wrehouse-list" element={<WarehoueseList />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
