import ExpenseTracker from "./components/ExpenseTracker";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<ExpenseTracker />} />
      </Routes>
    </Router>
  );
}

export default App;
