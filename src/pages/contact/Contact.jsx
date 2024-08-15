import React from "react";
import "./contact.css"
import Footer from "../../component/footer/Footer";
import Navbar from "../../component/navbar/Navbar";


const Contact = () => {
  return (
    <div>
    <Navbar />

      <div class="image-container">
        <h1 style={{color: "white", fontSize: "50px"}}>Contact Us</h1>
      </div>

      <div class="heading-container">
        <h2 style={{textAlign: "center"}}>Welcome to Help Center</h2>
      </div>
      
      <section class="search">
        <h3 style={{fontWeight: "bolder"}}>Explore help articles</h3>
        <input type="text" placeholder="Search help articles" />
      </section>

      <section class="p-5">
  <div class="container">
    <div class="row text-center">
      <div class="col-md">
        <div class="card bg-white text-danger card10">
          <div class="card-body text-start">
            <h3>💵Refunds & Charges</h3>
            <hr/>
            <p class="text-start">
              <a href="">Refund timelines, policies & processes </a> <br/>
              <a href="">Get a receipt for your booking </a> <br/>
              <a href="">Payment security and options </a>
            </p>
            <hr/>
            <h4 class="text-start">
              <a href="">More </a>
            </h4>
          </div>
        </div>
      </div>
      <div class="col-md">
        <div class="col-md">
          <div class="card bg-white text-danger card11">
            <div class="card-body text-start">
              <h3>🏬Lodging</h3>
              <hr/>
              <p class="text-start">
                <a href="">Change your hotel and vacation booking </a> <br/>
                <a href="">Cancel your hotel and vacation booking </a> <br/>
                <a href="">Check in and out of your hotel booking </a>
              </p>
              <hr/>
              <h4 class="text-start">
                <a href="">More </a>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md"><div class="col-md">
        <div class="card bg-white text-danger card12">
          <div class="card-body text-start">
            <h3>🚗Car</h3>
            <hr/>
            <p class="text-start">
              <a href="">Change or cancel your car rental </a> <br/>
              <a href="">Book a car rental </a> <br/>
              <a href="">Car rental price quotes </a>
            </p>
            <hr/>
            <h4 class="text-start">
              <a href="">More </a>
            </h4>
          </div>
        </div>
      </div></div>
    </div>
  </div>
 </section>

<section id="cont1" class="p-5">
  <div class="container">
    <div class="row text-center">
      <div class="col-md">
        <div class="card bg-white text-danger card13">
          <div class="card-body text-start">
            <h3>🧾Accounts</h3>
            <hr/>
            <p class="text-start">
              <a href="">View your bookings </a> <br/>
              <a href="">Update your account information </a> <br/>
              <a href="">Make changes to your account </a>
            </p>
            <hr/>
            <h4 class="text-start">
              <a href="">More </a>
            </h4>
          </div>
        </div>
      </div>
      <div class="col-md">
        <div class="col-md">
          <div class="card bg-white text-danger card14">
            <div class="card-body text-start">
              <h3>🎖️Loyalty & Rewards</h3>
              <hr/>
              <p class="text-start">
                <a href="">Join Dewealth hotel Rewards & earn nights</a> <br/>
                <a href="">Find your DeWealth hotel Rewards stamp </a> <br/>
                <a href="">Attach a booking to your DWH Rewards acct</a>
              </p>
              <hr/>
              <h4 class="text-start">
                <a href="">More </a>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md"><div class="col-md">
        <div class="card bg-white text-danger card15">
          <div class="card-body text-start">
            <h3>🛡️Security</h3>
            <hr/>
            <p class="text-start">
              <a href="">Payment security and options </a> <br/>
              <a href="">Beware of email scams (phishing) </a> <br/>
              <a href="">Responsible disclosure of web vulnerabilities</a>
            </p>
            <hr/>
            <h4 class="text-start">
              <a href="">More </a>
            </h4>
          </div>
        </div>
      </div></div>
    </div>
  </div>
</section>

<Footer />

    </div>
  );
};

export default Contact;
