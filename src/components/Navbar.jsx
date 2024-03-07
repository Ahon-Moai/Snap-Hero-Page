import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="App">
        <div className="Left-Nav">
          <div className="Logo">
            <h1>Snap</h1>
          </div>
          <div className="items">
            <p className="item">Features</p>
            <p className="item">Company</p>
            <p className="item">Careers</p>
            <p className="item">About</p>
          </div>
        </div>
        <div className="Right-Nav">
          <button className="btn-login">Login</button>
          <button className="btn-register">Register</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
