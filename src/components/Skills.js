import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at purus eget quam lacinia dignissim a a erat. Sed sollicitudin gravida justo non venenatis. Maecenas a justo et est aliquet fermentum id ac purus. Fusce elementum libero id sapien sollicitudin, id aliquet sapien vestibulum. Aenean fringilla risus non nisl viverra, a auctor nisl laoreet. Sed sollicitudin odio a dui aliquet, eget hendrerit tellus consequat. Fusce in ex vel purus hendrerit accumsan in et enim. Sed aliquet nisi a arcu tincidunt, quis elementum tortor faucibus. Quisque sed orci eget turpis eleifend condimentum vel ut libero. Praesent sed venenatis libero.</p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Brand Identity</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Logo Design</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp}></img>
    </section>
  )
}