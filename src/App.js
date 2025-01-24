import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  import DB from './pages/md-db';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element= { <DB /> } />
      </Routes>
    </Router>
  );
}

export default App;
