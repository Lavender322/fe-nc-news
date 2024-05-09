import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <h1 className="heading">NC News</h1>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <Link to="/profile" className="navbar-item">
            Profile
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Header;
