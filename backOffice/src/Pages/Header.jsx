import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <ul>
        <Link to={'/'}>
          <li>Home</li>
        </Link>
        <Link to={'/Login'}>
          <li>Login</li>
        </Link>
        <Link to={'/Profile'}>
          <li>Profile</li>
        </Link>
        <Link to={'/Dashboard'}>
          <li>Dashboard</li>
        </Link>
      </ul>
    </header>
  );
};
export default Header;
