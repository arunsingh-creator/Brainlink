import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Pricing from "./pages/Pricing";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </Router>
  );
}
