const About = () => {
  return (
    <section
      id="about"
      data-nav-tooltip="About"
      className="pp-section pp-scrollable section counter"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 m-15px-tb">
            <div className="about-me">
              <div className="img">
                <div className="img-in">
                  <img src="static/img/5_2.jpg" title="" alt="" width="400" height="400"/>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="about-info">
              <div className="title">
                <h3>About me.</h3>
              </div>
              <div className="about-text">
                <h3>
                  {`I am`} a Software Engineer with over 3 years of work experience.{" "}
                </h3>
                <p>
                  {`I'm`} a masters student of Computer Science at Indiana University. 
                   {` I've`} spent over three years as a software developer at Tata Consultancy Services, 
                   where {`I've`} relished the opportunity to tackle real-world challenges in the software industry.
                </p>
                <div className="btn-bar">
                  <a className="px-btn px-btn-theme" href="#contactus">
                    <span>Contact Me</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="separated" />
        <div className="title">
          <h3>Education &amp; Skills</h3>
        </div>
        <div className="row">
          <div className="col-lg-4 m-15px-tb">
            <ul className="aducation-box">
              <li>
                <span>2022-Present</span>
                <h6>Masters in Computer Science</h6>
                <p>Indiana University, Bloomington</p>
              </li>
              <li>
                <span>2015-2019</span>
                <h6>Bachelors in Information Technology</h6>
                <p>Pune University</p>
              </li>
            </ul>
          </div>
          <div className="col-lg-7 ml-auto m-15px-tb">
            <div className="skills-box">
              <h3>My skills</h3>
              <div className="skill-lt">
                <h6>Java</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "94%" }}>
                    <span data-toggle="tooltip" title="94%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>Python</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "85%" }}>
                    <span data-toggle="tooltip" title="85%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>MySQL</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "82%" }}>
                    <span data-toggle="tooltip" title="82%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>Office Suite</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "90%" }}>
                    <span data-toggle="tooltip" title="90%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>DevOps and Cloud Services</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "75%" }}>
                    <span data-toggle="tooltip" title="75%" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="separated" />
        <div className="title">
          <h3>Experience.</h3>
        </div>
        <div className="resume-box">
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/c1_n.png" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Software Developer</h6>
                  <label>Tata Consultancy Services | Mumbai, India | Jun 2019 - Jul 2022</label>
                  <div className="rb-time">Full Time</div>
                  <p>
                  As a software developer in Tata Consultancy {`Services's`} TCS iON unit, I was responsible for designing, developing, and maintaining software applications. Apart from that my role included collaborating with other developers and stakeholders to ensure the software meets business requirements and is delivered on time. I Implemented core system components using programming languages such as Java, Javascript, Python, HTML, CSS, React and gained knowledge of various software development methodologies and tools. 
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/c3_n.png" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Software Developer Intern</h6>
                  <label>Prompt Software Consultants | Indore, India | Dec 2017 - Jan 2018</label>
                  <div className="rb-time">Full Time</div>
                  <p>
                  Worked as a Software Developer Intern at Prompt Software Consultants, Indore. Gained valuable experience as a software developer intern, working alongside the development of an invoice generating software for Aristo Pharmaceuticals Private Limited, and made meaningful contributions to its development and successful implementation.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/c2.jpeg" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Associate Instructor</h6>
                  <label>Indiana University | Bloomington, USA | Jan 2023 - Present</label>
                  <div className="rb-time">Part Time</div>
                  <p>
                  As an associate instructor at Indiana University Bloomington, I conduct office hours, lab sessions, prepare assignments, and grade for Software Systems, a course that covers object-oriented programming, large project management, and operating system interface. I enjoy teaching and mentoring nearly 250 students who opt for this course, and I am passionate about sharing my knowledge and skills in computer science.                  
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
