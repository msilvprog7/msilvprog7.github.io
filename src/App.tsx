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
  FaGlobe,
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
const Title = "Senior Software Engineer";
const Company = "Microsoft";

const App: React.FC = () => {
  return (
    <Container className="p-3">
      <Navbar expand="lg">
        <Navbar.Brand href="#about-me">{Name}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#about-me">About Me</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container className="p-3">
        <Row>
          <Col md={3}>
            <Profile
              src={Files.Images.Profile}
              name={Name}
              title={Title}
              company={Company}
            />
          </Col>
          <Col md={5}>
            <Heading id="about-me" heading="About Me">
              <Heading.Body>
                Software engineer with 6+ years of experience developing web
                services. Aspiring to create products users love.
              </Heading.Body>
            </Heading>
          </Col>
          <Col md={4}>
            <Heading id="contact" heading="Contact">
              <Row>
                <FaMapMarkerAlt className="contact" />
                <Link
                  className="contact"
                  href="https://goo.gl/maps/LSCZ3ojficzeVdQE7"
                  text="Bellevue, WA"
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
          <Col md={4}>
            <Heading id="education" heading="Education">
              <Heading.Subtitle>Aug 2012 - May 2016</Heading.Subtitle>
              <Heading.Title>
                B.S. Computer Science, University of Virginia
              </Heading.Title>
              <Heading.Body>
                3.941 GPA; Capstone website for the Rivanna Trails Foundation;
                Undergraduate Thesis on societal values in online privacy.
              </Heading.Body>
            </Heading>
            <Heading id="skills" heading="Skills">
              <Heading.Subtitle>Languages</Heading.Subtitle>
              <Heading.Body>
                C#, Java, Python, TypeScript, CSS, HTML
              </Heading.Body>
              <Heading.Subtitle>Frameworks</Heading.Subtitle>
              <Heading.Body>ASP.NET, Node.js, React, Vue.js</Heading.Body>
              <Heading.Subtitle>Software</Heading.Subtitle>
              <Heading.Body>
                Git, Azure, CI/CD, Figma, Photoshop, Premiere Pro
              </Heading.Body>
            </Heading>
          </Col>
          <Col md={8}>
            <Heading id="experience" heading="Experience">
              <Heading.Subtitle>Aug 2016 - Present</Heading.Subtitle>
              <Heading.Title>
                Senior Software Engineer • Microsoft
              </Heading.Title>
              <Heading.Body>
                Directions (2022 – Present). Coordinated market flighting of OSM
                data for route quality. Mentored development of website to debug
                routes. Delivered commute ETA lookup service for Windows.
              </Heading.Body>
              <Heading.Body>
                Beacon (2016 – 2021). Designed and developed device location
                notification service for Teams, Family Safety, and Bing. Built
                website to debug location upload and inferences. Experimented on
                detecting meeting locations to provide time to leave in Outlook.
              </Heading.Body>
              <Heading.Body>
                Hackathon achievements. Bring my pet home collar (2019 One Week,
                2 nd place in Maps and Geospatial), Find my family (2017 Cortana
                Skills, 1 st place), and Music ticket bot (2017 One Week, 2nd
                place Millennials).
              </Heading.Body>
              <Heading.Subtitle>2013 - 2015</Heading.Subtitle>
              <Heading.Title>
                Software Engineer Intern • Microsoft, Open Roads
              </Heading.Title>
              <Heading.Body>
                Microsoft (2015). Location history for Microsoft privacy. Speed
                test search result for Bing.
              </Heading.Body>
              <Heading.Body>
                Open Roads Consulting (2013, 2014). Event planning, travel time,
                and localization for the traffic management system. Website for
                quality assurance.
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
                <Project.Title>Wedding Website</Project.Title>
                <Project.Subtitle>
                  React, <FaGithub />
                  <Link
                    href="https://github.com/msilvprog7/wedding"
                    text="Github"
                  />
                  ,
                  <FaGlobe />
                  <Link
                    href="https://bit.ly/emily-michael-2021"
                    text="Website"
                  />
                </Project.Subtitle>
                <Project.Body>
                  My wife and my website for our wedding. I was interested in
                  designing an image-centric, mobile-friendly website to invite
                  our friends and family to our wedding while also providing
                  easy-to-access links to places to visit in the area.
                </Project.Body>
                <Project.Image
                  src={Files.Images.Projects.Wedding}
                  alt="My wife and my wedding website"
                />
              </Project>
            </Col>
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
          </Row>
          <Row>
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
          </Row>
          <Row>
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
          </Row>
          <Row>
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
          </Row>
          <Row>
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
