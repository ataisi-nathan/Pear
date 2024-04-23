import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sign-in">Sign In</Link>
          </li>
          <li>
            <Link to="/sign-up">Sign Up</Link>
          </li>
          <li>
            <Link to="/dashboard">Admin Dashboard</Link>
          </li>
          <li>
            <Link to="/students">Sign Up</Link>
          </li>
          <li>
            <Link to="/parents">Admin Dashboard</Link>
          </li>
          <li>
            <Link to="/teachers">Admin Dashboard</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;