import Clients from "./components/Clients";
import Dashboard from "./components/Dashboard";
import Reports from "./components/Reports";
import ExpenseTracker from "./components/ExpenseTracker";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<ExpenseTracker />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
