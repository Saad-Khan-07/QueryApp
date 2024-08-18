import './App.css';
import Navbar from './components/Navbar';
import QueryCards from './components/QueryCards';
import Footer from './components/Footer';
import Complain from './components/Complain';
import ComplaintTracker from './components/ComplaintTracker';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element= {<QueryCards/>} />
        <Route path="/complaints" element= {<Complain/>} />
        <Route path="/complainttracker" element= {<ComplaintTracker/>} />
      </Routes>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;