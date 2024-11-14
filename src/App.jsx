import Clients from "./components/Clients";
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
        <Route path="/" element={<Clients />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
