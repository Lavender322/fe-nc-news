import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <h1 className="heading">NC News</h1>
      <nav className="navbar">
        <Link to="/" className="navbar-item">
          Home
        </Link>
        <Link to="/topics" className="navbar-item">
          Topics
        </Link>
        <Link to="/profile" className="navbar-item">
          Profile
        </Link>
      </nav>
    </>
  );
}

export default Header;
