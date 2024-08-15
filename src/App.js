import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Nav from './components/nav/Nav';
import RobotController from './components/robotController/RobotController';

function App() {
  return (
    <>
      <Router>
        <div>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/robot" element={<RobotController />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
