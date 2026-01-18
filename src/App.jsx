import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

import Layout from "./ui/sections/Layout";
import Auth from "./pages/Auth";

import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Projects from "./pages/Projects";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>

          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Auth />} />

          <Route
            path="/app"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="projects" element={<Projects />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
