import React from "react";
import "./home.css"
import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />

      <div class="img-container">
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="images/de wealth 3.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img src="images/DON 1.jpg" class="d-block w-85 alt=" />
            </div>
            <div class="carousel-item">
              <img
                src="images/de wealth 4.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
      <form action="" id="form" class="">
        <h4>BOOK NOW👍</h4>
        <label for="">
          <i></i>
        </label>
        <input type="text" placeholder="Day of Arrival" value="" /> <br />
        <br />
        <input type="text" placeholder="Time Of Arrival" /> <br />
        <br />
        <input
          type="text"
          placeholder="Travellers (2 travellers- 1 Room)"
        />{" "}
        <br />
        <br />
        <input type="submit" />
      </form>

      <div class="banner">
        <h1>Find and book your perfect stay☺️</h1>
        <div class="features">
          <div class="feature">
            <span class="icon bg-dark">🌙</span>
            <p>Earn rewards on every night you stay</p>
          </div>
          <div class="feature">
            <span class="icon bg-dark">🏷️</span>
            <p>Save more with Member Prices</p>
          </div>
          <div class="feature">
            <span class="icon bg-dark">📅</span>
            <p>Free cancellation options if plans change</p>
          </div>
        </div>
      </div>
      <div class="grid-container">
        <h3>CHOOSE YOUR COMFORT </h3>
      </div>

      <div class="responsive">
        <div class="gallery">
          <a target="_blank" href="images/room 1.jpg">
            <img src="images/room 1.jpg" alt="" width="600" height="400" />
          </a>
          <div class="desc">
            Traditional King Room <br />
            Rated:
            <br />
            ⭐⭐⭐⭐⭐
          </div>
        </div>
      </div>

      <div class="responsive">
        <div class="gallery">
          <a target="_blank" href="#">
            <img
              src="images/room 2.jpg"
              alt="Forest"
              width="600"
              height="400"
            />
          </a>
          <div class="desc">
            Penthouse King Room <br />
            Rated: <br />
            ⭐⭐⭐⭐
          </div>
        </div>
      </div>

      <div class="responsive">
        <div class="gallery">
          <a target="_blank" href="images/room 3.jpg">
            <img
              src="images/room 3.jpg"
              alt="Northern Lights"
              width="600"
              height="400"
            />
          </a>
          <div class="desc">
            Deluxe Queen Room <br />
            Rated: <br />
            ⭐⭐⭐⭐⭐
          </div>
        </div>
      </div>

      <div class="responsive">
        <div class="gallery">
          <a target="_blank" href="images/room 4.jpg">
            <img
              src="images/room 5.jpg"
              alt="Mountains"
              width="600"
              height="400"
            />
          </a>
          <div class="desc">
            Supreme Double Room <br />
            Rated: <br />
            ⭐⭐⭐⭐
          </div>
        </div>
      </div>
      <div class="clearfix"></div>
      <div style={{padding:"6px"}}></div>

      <div class="price-container">
        <h2 style={{fontWeight: "bolder"}}>Our prices are lowest in January</h2>
        <a href="#">
          <h6 style={{color: "black"}}>See average prices for all months </h6>
        </a>
      </div>
      <div class="price-container2">
        <h3 id="pc">WE OFFER MORE...</h3>
      </div>

      {/* <!-- our services --> */}
      <div class="categories">
        <div class="category">
          <a href="">
            <img src="images/chef 1.jpg" alt="Apartments" />
          </a>
          <div class="overlay">Catering Services</div>
        </div>
        <div class="category">
          <a href="">
            <img src="images/massaging.jpg" alt="Guest Houses" />
          </a>
          <div class="overlay">Spa Services</div>
        </div>
        <div class="category">
          <a href="">
            <img src="images/badminton.jpg" alt="Aparthotels" />
          </a>
          <div class="overlay">Recreational Services</div>
        </div>
      </div>

      {/* <!-- Our Dining --> */}
      <div class="dining-container">
        <h1 style={{fontWeight: "bolder"}}>
          DeWealth <span style={{color: "red"}}>Dining</span>
        </h1>
      </div>
      <div class="horizontal-lines">
        <div class="line long"></div>
        <div class="line short"></div>
        <div class="line long"></div>
      </div>
      <div class="dining-section bg-light">
        <div class="dining-header">
          <span style={{color: "rgb(240, 53, 53)"}}>DINING</span>
        </div>
        <div class="dining-cards">
          <div class="dining-card">
            <img src="images/res 1.jpg" alt="The Sky Restaurant" />
            <h3>THE SKY RESTAURANT</h3>
            <p>
              Situated at the tallest Penthouse of DeWealth Hotels, the Sky
              Restaurant has a 'wow' factor that is hard to dispute. It's a...
            </p>
            <a href="#">Read More ➔</a>
          </div>
          <div class="dining-card">
            <img src="images/res 2.jpg" alt="Atarodo" />
            <h3>ATARODO</h3>
            <p>
              The Atarodo is an infusion of afro-centric food culture. The menu
              is the brain-child of our British Nigerian c...
            </p>
            <a href="#">Read More ➔</a>
          </div>
          <div class="dining-card">
            <img src="images/res 5.jpg" alt="Lagoon Breeze" />
            <h3>LAGOON BREEZE</h3>
            <p>
              Located by the swimming pool, the Lagoon Breeze Restaurant is
              loved by those who know Port-Harcourt and appreciate nicely pre...
            </p>
            <a href="#">Read More ➔</a>
          </div>
        </div>
      </div>

      {/* <!-- frequent question --> */}
      <section id="questions" class="p-5">
        <div class="container" />
        <h1 style={{fontWeight: "bolder"}} class="text-center mb-4">
          Frequently Asked <span style={{ color: "red" }}>Questions</span>
        </h1>
        <div class="horizontal-lines">
          <div class="line long"></div>
          <div class="line short"></div>
          <div class="line long"></div>
        </div>

        <div class="accordion accordion-flush" id="accordionFlushExample" />
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Can i book a refundable accomodation option in DeWealth Hotels?
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              If you want the flexibility to change your plans to Port Harcourt,
              most hotels offer refundable* rates that you can book. You can see
              this accommodation by searching our site and using the “fully
              refundable” filter to narrow the results down.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Why should I book my accomodation with DeWealth Hotels?
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              There are plenty of reasons to book your accomodation with us: our
              free cancellations on selected hotels* gives you the flexibility
              you’re looking for. Our Price Guarantee ensures that you always
              get the lowest price.
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Is parking available at DeWealth Hotel?
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              Yes, free parking is available to guests.
            </div>
          </div>
        </div>

        {/* <!-- item 4 --> */}
        <div class="accordion-item" />
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#question-four"
          >
            What are some of the property amenities at DeWealth Hotel?
          </button>
        </h2>
        <div
          id="question-four"
          class="accordion-collapse collapse"
          data-bs-parent="#questions"
        >
          <div class="accordion-body">
            Some of the more popular amenities offered include a swimup bar,
            free wifi, and a pool.
          </div>
        </div>
      </section>

      {/* <!-- About us --> */}
      <div class="about-container">
        <h1 style={{fontWeight: "bolder"}}>
          About <span style={{color: "red"}}>Us</span>
        </h1>
        <div class="horizontal-lines">
          <div class="line long"></div>
          <div class="line short"></div>
          <div class="line long"></div>
        </div>
      </div>
      <div class="hotel-section">
        <div class="hotel-image">
          <img src="images/de wealth 4.jpg" alt="Eko Hotel & Suites Pool" />
        </div>
        <div class="hotel-content">
          <h2>The Most Preferred Hotel in West Africa</h2>
          <p>
            DeWealth Hotels is the most preferred hotel in West Africa, and it
            is all about the right mix! Located in the heart of Uyo, we offer
            our clients a perfect blend of business & leisure amenities with
            dining and recreational options delicately infused in one amazing
            space. We crown all these with services that meet the highest
            international standards.
          </p>
          <p>
            Overlooking the new Ibom river, it is just a 10-minute drive to the
            City Centre and only 60 minutes away from the Airport.
          </p>
          <p>
            Our hotels are designed for your comfort and convenience. Your
            security is our primary concern and you will find our customer care
            second to none.
          </p>
          <a href="#" class="learn-more-btn">
            Learn More
          </a>
        </div>
      </div>

      {/* <!-- contact us --> */}
      <div class="contact-container">
        <h1 style={{fontWeight: "bolder"}}>
          Contact <span style={{color: "red"}}>Us</span>
        </h1>
      </div>
      <div id="line" class="horizontal-lines">
        <div class="line long"></div>
        <div class="line short"></div>
        <div class="line long"></div>
      </div>
      <div class="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.5149248823664!2d7.939349073558542!3d5.019886338810818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105d572ccc014075%3A0x81f5039ae8705c31!2sTHE%20DENTAL%20SURGERY%20(UYO%20SMILE%20CENTRE)!5e0!3m2!1sen!2sng!4v1721311781511!5m2!1sen!2sng"
          width="100%"
          height="450"
          style={{border:"0"}}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <form class="table" style={{width: "30%"}}>
        <div class="container">
          <div class="info">
            <h3>INFORMATION</h3>
            <div class="address">
              <span class="icon">🏠</span>
              <div class="details">
                <strong>ADDRESS</strong>
                <p>
                  Plot 15 Ekpeyong Street,
                  <br />
                  PMB 12724, Nwaniba, Uyo, <br /> Akwa-Ibom State
                  <br />
                  Nigeria
                </p>
              </div>
            </div>
          </div>
          <div class="phone-fax">
            <span class="icon">📞</span>
            <div class="details">
              <strong>PHONE / FAX</strong>
              <p>
                International Calls: +234 9037744365,
                <br />
                National Calls: 08156706577
              </p>
            </div>
          </div>
          <div class="email">
            <span class="icon">📧</span>
            <div class="details">
              <strong>EMAIL</strong>
              <p>
                yubi4gabriel@gmail.com, <br />
                dewealth@mita.com
              </p>
            </div>
          </div>
        </div>
      </form>

      <div class="hotel-section">
        <div class="hotel-image">
          <h1
            style={{
              fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
              fontWeight: "bolder",
            }}
          >
            If you have <br /> any <br /> Questions <br /> don't <br />{" "}
            hestitate to{" "}
            <a href="/images/contact.html">
              <span
                style={{
                  color: "red",
                  fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                }}
              >
                Contact Us.
              </span>
            </a>
          </h1>
        </div>
        <div class="hotel-cont">
          <form id="form3">
            <h3>GET IN TOUCH</h3> <br />
            <input type="text" placeholder="Enter your name" /> <br />
            <br />
            <input type="text" placeholder="Enter your Phone number" /> <br />
            <br />
            <input type="text" placeholder="Enter youe email address" /> <br />
            <br />
            <input id="textarea" type="text" placeholder="Leave a message..." />
            <h6>*All fields are mandatory</h6>
            <button type="submit">SEND MESSAGE</button>
          </form>
        </div>
      </div>

      {/* <!-- FOOTER --> */}
    <Footer />
    </div>
  );
};

export default Home;
