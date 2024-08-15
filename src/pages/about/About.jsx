import React from 'react'
import "./About.css"
import Navbar from '../../component/navbar/Navbar'
import Footer from '../../component/footer/Footer'


const About = () => {
  return (
    <div>
      <Navbar />
              <div class="head-cont">
          <h1 style={{fontWeight: "bolder"}}>About <span style={{color: "red", fontFamily: "Verdana, Geneva, Tahoma, sans-serif"}}>DeWealth Hotels</span></h1>
          <div id="line" class="horizontal-lines">
            <div class="line long"></div>
            <div class="line short"></div>
            <div class="line long"></div>
          </div>
        </div>
        <div class="paragraph-cont">
          <p>DeWealth Hotels & Suites is the most preferred hotel in West Africa and it's all about the right mix! Located in the heart of Nwaniba, Uyo and shielded from the hustle and bustle <br/> of the Uyo metropolis, we offer our corporate clients and walk in guests a perfect blend of relaxation, activities, and African tradition delicately infused to meet the highest international standards.</p>
          <p>Overlooking the Eko Atlantic City and Ocean, it is just a 10-minute drive to the City Centre and only 45minutes away from the Airport.</p>
          <p>Our hotels are designed for your comfort and convenience. Your security is our primary concern and you'll find our customer care second to none.</p>
          <p>Our hotel has taken important steps to live up to West Africa's future model in the hospitality sector. With the best conference and banqueting facilities, tastefully furnished <br/> to a 7000-seater capacity, a world-class swimming pool, 824 excellently furnished rooms spread across 4 hotels: DeWealth SIGNATURE, DeWealth SUITES, DeWealth HOTEL AND KURAMO GARDENS, mostly with a choice of city and sea views. We have 9 different restaurants and 7 different bars serving a range of international cuisines, amongst other facilities.</p>
          <p>The hotel is equipped with a state of the art health and fitness centre comprising of a gym, a tennis/basket ball court, a volley ball court, a sauna, spa, salon, and nail studio. We have an in-house medical clinic as well.</p>
          <p>We host the best themed buffet every Friday evening where we serve specialties across the globe: Africa, Asia, America, Italy, Mexico, Middle East and Mongolia amongst others.</p>
          <p>We are passionate about serving you and look forward to having you.</p>
          <p>Welcome to DeWealth Hotels & Suites, Nesting International Standards with African Hospitality.</p>
        </div>

        <div class="body-container">
          <h1 style={{fontWeight: "bolder"}}>Our <span style={{color: "red", fontFamily: "Verdana, Geneva, Tahoma, sans-serif"}}>VISION & MISSION</span></h1> <br/>
          <ul class="b">
            <li>We aspire to be the leading and preferred hotel in West Africa</li> <br/>
            <li>We are committed to exceeding guests' expectations</li> <br/>
            <li>We are dedicated to providing impeccable facilities and personalized services</li> <br/>
            <li>We are proud to deliver genuine care, comfort and warmth to all our guests</li> <br/>
            <li>We pursue growth and development through continuous learning</li> <br/>
            <li>We are constantly adapting to an ever-changing world</li> <br/>
            <li>DeWealth Hotels & Suites... Hospitality at its peak</li> <br/>
          </ul>
        </div>

        <div class="body-container">
          <h1 style={{fontWeight: "bolder"}}>Our <span style={{color: "red", fontFamily: "Verdana, Geneva, Tahoma, sans-serif"}}>VALUES</span></h1> <br/>
          <ul class="b">
            <li>Commitment to Excellence</li> <br/>
            <li>Pursuit of Growth</li> <br/>
            <li>Genuine Care</li> <br/>
            <li>Dedication</li> <br/>
            <li>Creativity</li> <br/>
            <li>Passion</li> <br/>
            <li>Pride</li> <br/>
            <li>Integrity and Discipline</li> <br/>
            <li>Socially and Environmentally Responsible</li> <br/>
          </ul>
        </div>
        <Footer />
    </div>
  )
}

export default About
