import React from "react";

const Footer = () => {
    return (
      <footer>
        <div class="flex-container">
          <div class="flex1">
            <a href="#">ABOUT</a>
            <a href="#">GALLERY</a>
            <a href="#">OUR EVENTS</a>
            <a href="#">OUR HOTELS</a>
            <a href="#">DINING</a>
            <a href="#">OUR VISION & MISSION</a>
            <a href="#">CONTACT US</a>
            <a href="#">TERMS & CONDITIONS</a>
          </div>
          <div class="flex2">
            <a href="index.html">
              <img
                src="/images/1122222-removebg-preview 333.png"
                alt=""
                width="35%"
              />
            </a>
            <div class="address-cont">
              <p>
                🏠 Plot 15 Ekpeyong Street, PMB 12724, Nwaniba, Uyo, Akwa-Ibom
                State Nigeria
              </p>
              <p>
                ☎️ International Calls: +234 9037744365, National Calls:
                08156706577
              </p>
              <p>📠 Fax: +234 1 2704071</p>
              <p>
                📧 sales@dewealthhotels.com, reservation@dewealthhotels.com,{" "}
                <br /> banquet@dewealthhoteals.com
              </p>
            </div>
          </div>

          <div class="flex3">
            <h5>NEWS LETTER</h5>
            <p>
              Subscribe to our email newsletter <br /> to recieve updates <br />{" "}
              and news.
            </p>
            <nav class="navbar navbar-light bg-light">
              <div class="container-fluid">
                <form class="d-flex">
                  <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Email address"
                    aria-label="Search"
                  />
                  <button class="btn btn-outline-danger" type="submit">
                    📧
                  </button>
                </form>
              </div>
            </nav>
          </div>
          <div class="form3-ref">
            <a href="#">
              <i class="bi bi-instagram text-danger p-2 h5"></i>
            </a>
            <a href="#">
              <i class="bi bi-twitter text-danger p-2 h5"></i>
            </a>
            <a href="#">
              <i class="bi bi-linkedin text-danger p-2 h5"></i>
            </a>
            <a href="#">
              <i class="bi bi-youtube text-danger p-2 h5"></i>
            </a>
            <a href="#">
              <i class="bi bi-facebook text-danger p-2 h5"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  };

export default Footer;
