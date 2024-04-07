import "./index.css";
import { NavbarComponent } from "./Components/navbar";
import { CardComponent } from "./Components/card";
import { FooterComponenet } from "./Components/footer";
import Planet1 from "./Assets/planet1.png";
import Planet2 from "./Assets/planet2.png";
import Planet3 from "./Assets/planet3.png";
import phone from "./Assets/phone.png";
import Astronaut from "./Assets/astro.png";
import Logo from "./Assets/Logo.png";
import Icons from "./Assets/icons.png";
import { Container, Row } from "react-bootstrap";

function App() {
  return (
    <><div className="App">

   
      <div className="hero-background-div">
        <NavbarComponent />
        {/* HERO */}
        <div className="hero">
          <p className="hero-top-title">Tired of Global Warming?</p>
          <p className="hero-title">VISIT A DIFFERENT PLANET</p>
          <p className="hero-text">
            Welcome to Celestial Voyages, where your dreams of interplanetary
            exploration come to life. Join us in venturing beyond the stars,
            discovering the wonders of otherworldly landscapes.
          </p>
          <div className="hero-buttons">
            <button className="hero-button-1">Destination</button>
            <button className="hero-button-2">Sign up-to-date</button>
          </div>
        </div>
      </div>
      {/* CARDS */}
      <div className="cards-backgroud-div">
        <div className="cards-info">
          <p className="card-info-title">A Stellar Selection</p>
          <p className="card-info-text">
            Explore three breathtaking destinations, each with its own unique
            charm and mystery.
          </p>
        </div>
        <Container>
          <Row>
            <CardComponent
              img={Planet1}
              title="Mars"
              text="Engage in thrilling activities like rover expeditions and marvel at the breathtaking Martian sunsets. Say hey to Elon!"
            />
            <CardComponent
              img={Planet2}
              title="Saturn"
              text="Experience weightlessness as you float among Saturn's rings to witness the grandeur of the gas giant from close quarters."
            />
            <CardComponent
              img={Planet3}
              title="Pluto"
              text="Uncover the mysteries of the distant dwarf “planet” Pluto. Traverse its icy plains that resides on the outskirts of our solar system."
            />
          </Row>
        </Container>
      </div>
      {/* PHONE */}
      <div className="phone-background-div">
        <div className="phone-info">
          <p className="phone-info-title">THE STARS IN YOUR POCKET... Coming soon</p>
          <p className="phone-info-text">
          We are very excited to launch our very own Celestial Voyages mobile application coming soon to the App Store & Google Play Store.
          </p>
          <img className="phone-img" alt="" src={phone}/>
        </div>
      </div>
      {/* FOOTER */}
      <img className="astro-img" alt="" src={Astronaut}></img>
     <FooterComponenet />
     </div>
    </>
  );
}

export default App;
