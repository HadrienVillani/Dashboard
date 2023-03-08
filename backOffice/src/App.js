import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Pages/Header';
import Login from './Pages/connection/Login';
import Register from './Pages/connection/Register';
import DashboardMain from './Pages/dashboard/DashboardMain';
import Roles from './Pages/dashboard/Roles';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Dashboard' element={<DashboardMain />} />
        <Route path='/Roles' element={<Roles />} />
        <Route exact path='*' element={<Home />} />
      </Routes>
    </Router>
  );
}
export default App;
