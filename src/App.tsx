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
                Software engineer with 8+ years of experience designing and
                developing full-stack web services, APIs, and user-centric
                websites focused on digital maps and navigation. Recognized for
                crafting high-quality code, delivering products that enhance
                user experiences, and mentoring team members with a thoughtful,
                collaborative approach. Passionate about continuous learning,
                innovation, and building solutions to assist people.
              </Heading.Body>
            </Heading>
          </Col>
          <Col md={4}>
            <Heading id="contact" heading="Contact">
              <Row>
                <FaMapMarkerAlt className="contact" />
                <Link
                  className="contact"
                  href="https://maps.app.goo.gl/2xFepBQbzcfdQJrx5"
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
          <Col md={7}>
            <Heading id="experience" heading="Experience">
              <Heading.Title>
                <b>Microsoft</b>
              </Heading.Title>
              <Heading.Subtitle>Aug 2016 - Present</Heading.Subtitle>
              <Heading.Body>
                <b>
                  Senior Software Engineer | Directions, March 2022 - Present
                </b>
                <br />
                Designed, developed, and led projects for the route services,
                APIs, and experiences for Bing Maps, Bing Search, Windows,
                Copilot, and B2B customers
                <ul>
                  <li>
                    Provided product recommendations with cutting-edge demos for
                    Route Enrichments including weather and grounding metadata
                  </li>
                  <li>
                    Directed the migration and re-architecture of API business
                    logic and tests to .NET Core on Linux and gRPC for Azure to
                    secure the stack while improving code re-use, debuggability,
                    and performance
                  </li>
                  <li>
                    Delivered improvements to customer experience across the
                    stack with features like smooth, encoded polylines, and a
                    67% reduction in customer bad requests
                  </li>
                  <li>
                    Shipped new features and tools like delayed segments,
                    commute ETA, and route debugger website
                  </li>
                </ul>
              </Heading.Body>
              <Heading.Body>
                <b>Software Engineer II | Beacon, August 2016 - March 2022</b>
                <br />
                Designed and developed device location service and home/work
                APIs for Bing Maps, Bing app, Outlook, Teams, and Family Safety
                app
                <ul>
                  <li>
                    Executed the data migration and re-architecture of Home/Work
                    APIs when data store was deprecated
                  </li>
                  <li>
                    Implemented and tested near real-time geofence inference for
                    Family Safety app notifications
                  </li>
                  <li>
                    Prototyped forward-thinking meeting location inference and
                    batch inference support
                  </li>
                  <li>
                    Supported team by creating location inference viewer website
                    to experiment with signal upload
                  </li>
                  <li>
                    Developed innovative hackathon projects to solve real-world
                    problems with existing technologies and frameworks: Bring my
                    pet home collar (2nd place Maps + Geospatial, 2019), Find my
                    family (1st place Cortana Skills, 2017), Music ticket bot
                    (2nd place Millennials, 2017)
                  </li>
                </ul>
              </Heading.Body>
              <br />
              <Heading.Title>
                <b>Microsoft</b>
              </Heading.Title>
              <Heading.Subtitle>2015</Heading.Subtitle>
              <Heading.Body>
                <b>Software Engineer Intern | User Location</b>
                <br />
                <ul>
                  <li>Location history for Privacy and Speed Test for Bing</li>
                </ul>
              </Heading.Body>
              <br />
              <Heading.Title>
                <b>Open Roads Consulting</b>
              </Heading.Title>
              <Heading.Subtitle>2013, 2014</Heading.Subtitle>
              <Heading.Body>
                <b>Software Developer Intern | Traffic Management System</b>
                <br />
                <ul>
                  <li>
                    Planned events feature, travel time reporting, localization
                    support, and QA website
                  </li>
                </ul>
              </Heading.Body>
            </Heading>
          </Col>
          <Col md={5}>
            <Heading id="skills" heading="Skills">
              <Heading.Subtitle>Languages</Heading.Subtitle>
              <Heading.Body>
                C#, TypeScript, Python, Java, CSS, HTML
              </Heading.Body>
              <Heading.Subtitle>Software</Heading.Subtitle>
              <Heading.Body>
                Git, VS Code, Azure, CI/CD, K8s, Copilot, Figma
              </Heading.Body>
              <Heading.Subtitle>Frameworks</Heading.Subtitle>
              <Heading.Body>
                ASP.NET Core, gRPC, Node.js, React, Vue.js
              </Heading.Body>
            </Heading>
            <Heading id="education" heading="Education">
              <Heading.Title>
                <b>
                  Bachelor of Science (B.S.), Computer Science | University of
                  Virginia | 3.941 GPA
                </b>
              </Heading.Title>
              <Heading.Subtitle>2012 - 2016</Heading.Subtitle>
              <Heading.Body>
                <ul>
                  <li>Capstone map website for Rivanna Trails Foundation</li>
                  <li>
                    Undergraduate thesis on societal values in online privacy
                  </li>
                </ul>
              </Heading.Body>
              <Heading.Title>
                <b>Google UX Design Certificate | Coursera</b>
              </Heading.Title>
              <Heading.Subtitle>2023</Heading.Subtitle>
              <Heading.Body>
                <ul>
                  <li>
                    7 sections, 3 projects with research, wireframes, mockups,
                    prototypes, and usability testing
                  </li>
                </ul>
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
