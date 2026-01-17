import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./ui/sections/Layout";
import Dashboard from "./pages/Dashboard";
import Simulator from "./pages/Simulator";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/simulator" element={<Simulator />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

