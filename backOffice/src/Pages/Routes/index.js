import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Home';
import Header from '../Header';
import Login from '../connection/Login';
import Register from '../connection/Register';
function index() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route exact path='*' element={<Home />} />
      </Routes>
    </Router>
  );
}
export default index;
