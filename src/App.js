
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';
import About from './Pages/About';
import Contact from './Pages/Contact';
import HomePage from './Pages/HomePage';
import Services from './Pages/Services';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='services' element={<Services />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
