import './App.css';
import Comments from './pages/Comments';
import LoginSignup from './pages/LoginSignup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App min-h-screen">
       <Router>
          <Routes>
            <Route path="/" element={<LoginSignup />} />
            <Route path="/comments" element={<Comments />} />
          </Routes>
       </Router>
    </div>
  );
}

export default App;
