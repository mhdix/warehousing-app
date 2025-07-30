import { Route, Routes } from "react-router-dom";
import AddValue from "./components/AddCategory/AddCategory";
import WrehouseProvider from "./components/WrehouseProvider";
import WrehouseList from "./components/WrehouseList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WrehouseProvider />}>
        <Route index element={<AddValue />} />
        <Route path="/wrehouse-list" element={<WrehouseList />} />
      </Route>
    </Routes>
  );
}

export default App;
