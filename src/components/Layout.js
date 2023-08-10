import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <div style={{ background: "red", padding: "2rem",display:"flex",justifyContent:"space-around" }}>
          <div>
            <Link to="/"><b>HOME</b></Link>
          </div>
          <div>
            <Link to="/about"><b>ABOUT</b></Link>
          </div>
          <div>
            <Link to="/login"><b>LOGIN</b></Link>
          </div>
          <div>
            <Link to="/signup"><b>SIGNUP</b></Link>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
