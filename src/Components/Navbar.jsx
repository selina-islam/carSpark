import React from 'react'

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">
            {" "}
            <img src="/img/Logo.png" alt="Logo" />
          </a>
          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#carsnavdiv"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="carsnavdiv">
            <ul className="navbar-nav ms-auto gap-3">
              <li className="nav-item">
                {" "}
                <a href="#" className="nav-link">
                  Used Cars
                </a>
              </li>
              <li className="nav-item">
                {" "}
                <a href="#" className="nav-link">
                  Auctions
                </a>
              </li>
              <li className="nav-item">
                {" "}
                <a href="#" className="nav-link">
                  New Cars
                </a>
              </li>
              <li className="nav-item">
                {" "}
                <a href="#" className="nav-link">
                  Sell Cars
                </a>
              </li>
              <li className="nav-item">
                {" "}
                <a href="#" className="nav-link">
                  Local Dealers
                </a>
              </li>
              <li className="nav-item">
                {" "}
                <a href="#" className="nav-link">
                  Support
                </a>
              </li>
              <li className="nav-item signup">
                {" "}
                <a href="#" className="nav-link">
                  {" "}
                  <i className="bi bi-person-fill signupIcon"></i>{" "}
                  <span className="signupbtn">Sign Up</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar