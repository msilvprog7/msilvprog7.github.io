import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import {
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaMobile,
} from "react-icons/fa";
import Files from "./components/Files";
import Heading from "./components/Heading";
import Link from "./components/Link";
import Profile from "./components/Profile";
import Project from "./components/Project";

import "./App.css";

const Name = "Michael Snider";
const Title = "Software Engineer 2 • Microsoft";

const App: React.FC = () => {
  return (
    <Container className="p-3">
      <Navbar expand="lg">
        <Navbar.Brand href="#objective">{Name}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#objective">Objective</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container className="p-3">
        <Row>
          <Col md={3}>
            <Profile src={Files.Images.Profile} name={Name} title={Title} />
          </Col>
          <Col md={5}>
            <Heading id="objective" heading="Objective">
              <Heading.Body>
                Collaborate on innovative and reliable technical solutions with
                5+ years of experience as a software engineer. I’m experienced
                in microservice development, prototyping, site reliability, and
                mentoring. I’m passionate about web development and customer
                experience.
              </Heading.Body>
            </Heading>
          </Col>
          <Col md={4}>
            <Heading id="contact" heading="Contact">
              <Row>
                <FaMapMarkerAlt className="contact" />
                <Link
                  className="contact"
                  href="https://goo.gl/maps/s5zpDrMVneYkC7wi6"
                  text="Woodinville, WA"
                />
              </Row>
              <Row>
                <FaMobile className="contact" />
                <Link
                  className="contact"
                  href="tel:7575618238"
                  text="(757)-561-8238"
                />
              </Row>
              <Row>
                <FaEnvelope className="contact" />
                <Link
                  className="contact"
                  href="mailto:msnider.software.engineer@gmail.com"
                  text="Email"
                />
              </Row>
              <Row>
                <FaLinkedin className="contact" />
                <Link
                  className="contact"
                  href="https://www.linkedin.com/in/msnider-software-engineer"
                  text="LinkedIn"
                />
              </Row>
              <Row>
                <FaGithub className="contact" />
                <Link
                  className="contact"
                  href="https://github.com/msilvprog7"
                  text="Github"
                />
              </Row>
              <Row>
                <FaDownload className="contact" />
                <Link className="contact" href={Files.Resume} text="Resume" />
              </Row>
            </Heading>
          </Col>
        </Row>
        <Row>
          <Col md={8}>
            <Heading id="experience" heading="Experience">
              <Heading.Subtitle>Sep 2018 - Present</Heading.Subtitle>
              <Heading.Title>{Title}</Heading.Title>
              <Heading.Body>
                Design, implement, and continue to onboard scenarios in ASP.NET
                microservice for the storage, refinement, and notification of
                users’ device locations for Teams, Family Safety, and Bing apps.
                The service supports 500K users for 10M signals per day with 90p
                latency under 2s.
              </Heading.Body>
              <Heading.Body>
                Received 2nd place in Maps and Geospatial science fair in 2019
                One Week hackathon for the development of an NFC pet collar and
                prototype Android app to reunite pets with their families.
              </Heading.Body>
              <Heading.Subtitle>Aug 2016 – Aug 2018</Heading.Subtitle>
              <Heading.Title>Software Engineer • Microsoft</Heading.Title>
              <Heading.Body>
                Developed and integrated ASP.NET web service API for curating
                collections of users’ favorite locations on Bing Maps, Windows
                Maps, and Cortana.
              </Heading.Body>
              <Heading.Body>
                Designed and prototyped ASP.NET web service infrastructure to
                collect device locations and infer users’ meeting locations for
                calendar enrichment and travel notifications in Outlook.
              </Heading.Body>
              <Heading.Body>
                Received 1st place in 2017 Cortana Skills hackathon for the
                development of a Node.js Bot Framework skill to help family
                members find the location of one another using speech or text
                recognition with LUIS.AI.
              </Heading.Body>
              <Heading.Body>
                Received 2nd place in Millennials category in 2017 One Week
                hackathon for the development of a Node.js Bot Framework skill
                to let music fans find concert tickets on SeatGeek using their
                location and Spotify history.
              </Heading.Body>
            </Heading>
          </Col>
          <Col md={4}>
            <Heading id="education" heading="Education">
              <Heading.Subtitle>Aug 2012 - May 2016</Heading.Subtitle>
              <Heading.Title>
                University of Virginia, Charlottesville, VA
              </Heading.Title>
              <Heading.Body>
                B.S. Computer Science • 3.941 GPA • Summa Cum Laude
                <br />
                Internships with Microsoft (2015) and Open Roads Consulting,
                Inc. (2013 and 2014)
              </Heading.Body>
            </Heading>
            <Heading id="skills" heading="Skills">
              <Heading.Title>Proficiencies</Heading.Title>
              <Heading.Body>
                C# • ASP.NET • Azure (Fabric, Key-Vault, Bus, CosmosDB, Redis)
                <br />
                Git • Code Review • Mentoring • Team Coordination • Agile
                Planning
                <br />
                Design • Microservices • RESTful APIs
                <br />
                Site Reliability • Monitoring • Testing
                <br />
              </Heading.Body>
              <Heading.Title>Competencies</Heading.Title>
              <Heading.Body>
                TypeScript • Node.js • React • Vue.js • HTML • CSS
                <br />
                Java • Android • Google Web Toolkit
                <br />
                C++ • Python • Django
                <br />
              </Heading.Body>
            </Heading>
          </Col>
        </Row>
      </Container>
      <hr />
      <Container className="p-3">
        <Heading id="projects" heading="Projects">
          <Row>
            <Col md={4}>
              <Project>
                <Project.Title>Planter</Project.Title>
                <Project.Subtitle>Android</Project.Subtitle>
                <Project.Body>
                  An Android app to organize photos of home plants over time.
                </Project.Body>
              </Project>
            </Col>
            <Col md={4}>
              <Project>
                <Project.Title>mshuffle</Project.Title>
                <Project.Subtitle>
                  Node.js, JavaScript,
                  <FaGithub />
                  <Link
                    href="https://github.com/msilvprog7/mshuffle"
                    text="Github"
                  />
                </Project.Subtitle>
                <Project.Body>
                  A shuffling algorithm for your music playlists by considering
                  the history of songs played and likes/dislikes of related
                  artists while you're listening.
                </Project.Body>
              </Project>
            </Col>
            <Col md={4}>
              <Project>
                <Project.Title>
                  Capstone (Trail Management Software)
                </Project.Title>
                <Project.Subtitle>
                  Python (Django), Google Maps JS API, JavaScript, HTML5
                </Project.Subtitle>
                <Project.Body>
                  4th year capstone project in which 20+ miles of the Rivanna
                  Trails Foundation KML data was routinely processed to simplify
                  routing maintenance requests and resolving property disputes
                  from a web app.
                </Project.Body>
                <Project.Image
                  src={Files.Images.Projects.Capstone}
                  alt="Capstone web app for Rivanna Trails Foundation"
                />
              </Project>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <Project>
                <Project.Title>Undergraduate Thesis</Project.Title>
                <Project.Subtitle>Privacy, Social Media</Project.Subtitle>
                <Project.Body>
                  4th year undergraduate thesis, I wrote about the changing
                  societal values concerning online information exchange.
                </Project.Body>
              </Project>
            </Col>
            <Col md={4}>
              <Project>
                <Project.Title>Android Web Controller</Project.Title>
                <Project.Subtitle>
                  Python (Flask), Arduino, JavaScript, <FaGithub />
                  <Link
                    href="https://github.com/msilvprog7/arduino-web-controller"
                    text="Github"
                  />
                </Project.Subtitle>
                <Project.Body>
                  Hack.UVA 2016 project, Website to set LED patterns and
                  sequences on an Arduino.
                </Project.Body>
              </Project>
            </Col>
            <Col md={4}>
              <Project>
                <Project.Title>JavaScript Game Engine</Project.Title>
                <Project.Subtitle>
                  JavaScript, <FaGithub />
                  <Link
                    href="https://github.com/msilvprog7/js-game-engine"
                    text="Github"
                  />
                </Project.Subtitle>
                <Project.Body>
                  4th year Game Design course project to create a JavaScript
                  Game Engine and Game.
                </Project.Body>
              </Project>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <Project>
                <Project.Title>Tilda</Project.Title>
                <Project.Subtitle>
                  Node.js, Chrome Plugin, Python (Flask)
                </Project.Subtitle>
                <Project.Body>
                  4th year Information Retrieval course project to refer to
                  links on visited pages by entering `~` in any text box in
                  Google Chrome.
                </Project.Body>
              </Project>
            </Col>
            <Col md={4}>
              <Project>
                <Project.Title>Get with the Program</Project.Title>
                <Project.Subtitle>
                  Python (Pygame), <FaGithub />
                  <Link
                    href="https://github.com/msilvprog7/get-with-the-program"
                    text="Github"
                  />
                </Project.Subtitle>
                <Project.Body>
                  1st Place at Hoos Hacking 2015 for a platformer game that
                  teaches children how to code.
                </Project.Body>
              </Project>
            </Col>
            <Col md={4}>
              <Project>
                <Project.Title>Scavenger</Project.Title>
                <Project.Subtitle>
                  Android, iOS (Swift), Node.js
                </Project.Subtitle>
                <Project.Body>
                  4th year Web and Mobile course project to make a social game
                  where players hide clues or riddles and others send pictures
                  of hidden items that solve those clues to earn points.
                </Project.Body>
              </Project>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <Project>
                <Project.Title>Slingshot Sam</Project.Title>
                <Project.Subtitle>
                  Android (LibGDX), <FaGithub />
                  <Link
                    href="https://github.com/davidamin/SlingshotSam"
                    text="Github"
                  />
                </Project.Subtitle>
                <Project.Body>
                  4th year Game Development club project for a game with drag
                  and release mechanics in an event-driven programming style.
                </Project.Body>
              </Project>
            </Col>
            <Col md={4}>
              <Project>
                <Project.Title>Bullder-</Project.Title>
                <Project.Subtitle>
                  JavaScript (PeerJS), WebRTC, <FaGithub />
                  <Link
                    href="https://github.com/jbarrow/Bullder-"
                    text="Github"
                  />
                </Project.Subtitle>
                <Project.Body>
                  Top 7 Showcase at Hack.UVA 2015, serverless social media site
                  to share pictures.
                </Project.Body>
              </Project>
            </Col>
            <Col md={4}>
              <Project>
                <Project.Title>
                  Python Image Manipulation / TSP Art
                </Project.Title>
                <Project.Subtitle>
                  Python (Pillow), <FaGithub />
                  <Link
                    href="https://github.com/msilvprog7/Python-Image-Manipulation"
                    text="Github"
                  />
                </Project.Subtitle>
                <Project.Body>
                  3rd year Theory of Computation course project, solves small
                  solutions to Traveling Salesman Problem on pictures that are
                  re-drawn with stippling pattern and connected using Concorde
                  TSP Solver.
                </Project.Body>
                <Project.Image
                  src={Files.Images.Projects.Tsp}
                  alt="TSP art of The Son of Man by Rene Magritte (1964)"
                />
              </Project>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <Project>
                <Project.Title>n-dex</Project.Title>
                <Project.Subtitle>
                  Python (Django), Bootstrap, CSS, <FaGithub />
                  <Link
                    href="https://github.com/msilvprog7/n-dex"
                    text="Github"
                  />
                </Project.Subtitle>
                <Project.Body>
                  2nd year Modern Art History flashcard tool I used to study and
                  memorize art for the exam.
                </Project.Body>
                <Project.Image
                  src={Files.Images.Projects.NDex}
                  alt="N-Dex card of The Treachery of Images by Rene Magritte (1929)"
                />
              </Project>
            </Col>
            <Col md={4}>
              <Project>
                <Project.Title>Boulder</Project.Title>
                <Project.Subtitle>
                  Python (Django), Pebble JavaScript (Simply.js), <FaGithub />
                  <Link
                    href="https://github.com/msilvprog7/Boulder-web"
                    text="Website"
                  />
                  ,
                  <Link
                    href="https://github.com/dferrer/Boulder"
                    text="Pebble"
                  />
                </Project.Subtitle>
                <Project.Body>
                  3rd place HackNC 2014, Pebble Award, social website for
                  sharing exercise progress measured on Pebble watch using
                  motion recognition from support-vector machines based on
                  accelerometer movements.
                </Project.Body>
                <Project.Image
                  src={Files.Images.Projects.Boulder}
                  alt="Boulder website for sharing exercise progress"
                />
              </Project>
            </Col>
          </Row>
        </Heading>
      </Container>
    </Container>
  );
};

export default App;
