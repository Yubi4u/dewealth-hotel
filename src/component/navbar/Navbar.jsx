import React from 'react'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand py-2" href="index.html">
            <img className="" src="images/gtyyt.png" alt="" width="45%" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul
              className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
              // style={{--bs-scroll-height: "100px"}}
            >
              <li className="nav-item dropdown">
                <a
                  className="nav-link active text-danger px-3 dropdown-toggle"
                  aria-current="page"
                  href="#"
                  id="navbarScrollingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-globe text-danger p-md-1"></i>English
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarScrollingDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      French
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Espanyol
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      German
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Chinese
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Portuguese
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Arabic
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Dutch
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link text-danger px-3" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-danger px-3"
                  href="#"
                  id="navbarScrollingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Rooms
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarScrollingDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Single Rooms
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Double Rooms
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Suites
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-danger px-3"
                  href="/about"
                  aria-disabled="true"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-danger px-3"
                  href="/contact"
                >
                  Contact
                </a>
              </li>
            </ul>

            <form className="d-flex btn1 fw-bolder">
              <button className="btn btn-outline-danger" type="submit">
                <i className="bi bi-people text-danger p-md-1"></i>BOOK NOW
              </button>
            </form>
          </div>
        </div>
      </nav>
  )
}

export default Navbar
