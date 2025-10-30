// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from '../Components/Contact/Contact';
import ContactList from '../Components/ContactList/ContactList';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Contact/>} />
        <Route path='/contactlist' element={<ContactList/>} />
        </Routes>
    </Router>
  );
}

export default App;
