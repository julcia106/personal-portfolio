import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img.svg"

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Software Engineer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    const handleButtonClick = () => {
        window.location.href = '#contact';
    };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Julia `}<span className="wrap">{text}</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at purus eget quam lacinia dignissim a a erat. Sed sollicitudin gravida justo non venenatis. Maecenas a justo et est aliquet fermentum id ac purus. Fusce elementum libero id sapien sollicitudin, id aliquet sapien vestibulum. Aenean fringilla risus non nisl viverra, a auctor nisl laoreet. Sed sollicitudin odio a dui aliquet, eget hendrerit tellus consequat. Fusce in ex vel purus hendrerit accumsan in et enim. Sed aliquet nisi a arcu tincidunt, quis elementum tortor faucibus. Quisque sed orci eget turpis eleifend condimentum vel ut libero. Praesent sed venenatis libero.</p>
                        <button onClick={handleButtonClick}>Let's connect <ArrowRightCircle size={25} /></button>

                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" ></img>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}