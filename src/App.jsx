import "./App.css";

function App() {
  return (
    <div className="portfolio">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">SK.</div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          className="resume-btn"
          href="/Saish_Kenekar_Resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Resume ↗
        </a>
      </nav>

      {/* MAIN */}
      <main>
        {/* HERO */}
        <section className="hero">
          <div className="hero-content">
            <p className="hero-label">
              COMPUTER SCIENCE ENGINEERING · FULL STACK DEVELOPMENT
            </p>

            <h1>
              Hi, I'm <span>Saish Kenekar.</span>
            </h1>

            <h2>
              I build full-stack applications
              <br />
              and AI-powered solutions.
            </h2>

            <p className="hero-description">
              Computer Science Engineering student with hands-on experience in
              full-stack development, AI applications and real-world software
              projects.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="primary-btn">
                View My Projects ↓
              </a>

              <a
                href="https://github.com/Saishh34"
                target="_blank"
                rel="noreferrer"
                className="secondary-btn"
              >
                GitHub ↗
              </a>
            </div>

            <div className="achievement">
              <span>🏆</span>

              <div>
                <strong>Smart India Hackathon 2025</strong>
                <small>National Winner · Software Edition</small>
              </div>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="hero-visual">
            <div className="visual-card">
              <div className="code-top">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="code-content">
                <p>
                  <span className="purple">const</span>{" "}
                  <span className="blue">developer</span> = {"{"}
                </p>

                <p className="indent">
                  name: <span className="green">"Saish Kenekar"</span>,
                </p>

                <p className="indent">
                  role: <span className="green">"Full Stack Developer"</span>,
                </p>

                <p className="indent">
                  stack: [
                  <span className="green">
                    "React", "Node", "Python"
                  </span>
                  ],
                </p>

                <p className="indent">
                  winner: <span className="orange">true</span>
                </p>

                <p>{"}"}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="about-section">
          <div className="section-heading">
            <span>01</span>
            <h2>About Me</h2>
          </div>

          <div className="about-grid">
            <div className="about-intro">
              <p className="about-lead">
                I’m a Computer Science Engineering student focused on
                full-stack development and AI-powered applications.
              </p>
            </div>

            <div className="about-content">
              <p>
                I enjoy turning ideas into practical software solutions, from
                responsive web applications to AI-based systems. My experience
                includes working with React.js, Node.js, Express.js, databases
                and Python-based AI technologies.
              </p>

              <p>
                I’ve built projects across web development and computer
                vision, including <strong>EcoFarming</strong>, which won the{" "}
                <strong>Smart India Hackathon 2025</strong>.
              </p>

              <div className="about-stats">
                <div>
                  <strong>3+</strong>
                  <span>Major Projects</span>
                </div>

                <div>
                  <strong>1</strong>
                  <span>SIH Winner</span>
                </div>

                <div>
                  <strong>3 Months</strong>
                  <span>Development Internship</span>
                </div>
              </div>
            </div>
          </div>
                </section>

        {/* SKILLS */}
        <section id="skills" className="skills-section">
          <div className="section-heading">
            <span>02</span>
            <h2>Technical Stack</h2>
          </div>

          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend</h3>

              <div className="skill-list">
                <span>React.js</span>
                <span>JavaScript</span>
                <span>HTML5</span>
                <span>CSS3</span>
                <span>Bootstrap</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Backend</h3>

              <div className="skill-list">
                <span>Node.js</span>
                <span>Express.js</span>
                <span>REST APIs</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Database</h3>

              <div className="skill-list">
                <span>MySQL</span>
                <span>MongoDB</span>
                <span>Firebase</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>AI & Computer Vision</h3>

              <div className="skill-list">
                <span>Python</span>
                <span>OpenCV</span>
                <span>YOLO</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Programming</h3>

              <div className="skill-list">
                <span>Java</span>
                <span>Python</span>
                <span>JavaScript</span>
                <span>SQL</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Tools</h3>

              <div className="skill-list">
                <span>Git</span>
                <span>GitHub</span>
                <span>Postman</span>
                <span>VS Code</span>
                <span>Vercel</span>
                <span>Cloudinary</span>
              </div>
            </div>
          </div>
                </section>

        
        
        {/* EXPERIENCE */}
        <section id="experience" className="experience-section">
          <div className="section-heading">
            <span>03</span>
            <h2>Experience</h2>
          </div>

          <div className="experience-item">
            <div className="experience-marker">
              <span></span>
            </div>

            <div className="experience-content">
              <div className="experience-header">
                <div>
                  <h3>Codec Technologies</h3>
                  <p>Full Stack Developer Intern</p>
                </div>

                <span className="experience-duration">
                  3 Months
                </span>
              </div>

              <div className="experience-details">
                <p>
                  Completed a 3-month Full Stack Development Internship with
                  hands-on experience in building web applications and
                  integrating frontend and backend systems.
                </p>

                <ul>
                  <li>
                    Developed a full-stack E-Commerce Product Catalog System.
                  </li>

                  <li>
                    Built REST APIs and integrated frontend with backend.
                  </li>

                  <li>
                    Designed responsive web interfaces using React.js.
                  </li>

                  <li>
                    Used Git, GitHub, and Postman for development and testing.
                  </li>

                  <li>
                    Worked with React.js, Node.js, Express.js, MySQL, HTML,
                    CSS, and JavaScript.
                  </li>
                </ul>
              </div>

              <div className="experience-tech">
                <span>React.js</span>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>MySQL</span>
                <span>JavaScript</span>
                <span>Git</span>
                <span>Postman</span>
              </div>
            </div>
          </div>
        </section>


                {/* PROJECTS */}
        <section id="projects" className="projects-section">
          <div className="section-heading">
            <span>04</span>
            <h2>Projects</h2>
          </div>

          <div className="projects-grid">

            {/* EcoFarming */}
            <div className="project-card featured-project">
              <div className="project-top">
                <span className="project-number">01</span>
                <span className="project-badge">SIH 2025 WINNER</span>
              </div>

              <h3>EcoFarming</h3>

              <p className="project-subtitle">
                AI-Powered Sustainable Farming Platform
              </p>

              <p className="project-description">
                A gamified sustainable farming platform designed to encourage
                eco-friendly farming practices through AI recommendations,
                authentication, rewards and community features.
              </p>

              <div className="project-tech">
                <span>React.js</span>
                <span>Node.js</span>
                <span>Firebase</span>
                <span>Gemini AI</span>
              </div>

              <div className="project-links">
                <a
                  href="https://eco-farming-three.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo ↗
                </a>

                <a
                  href="https://github.com/Saishh34"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>
              </div>
            </div>

            {/* AI Surveillance */}
            <div className="project-card">
              <div className="project-top">
                <span className="project-number">02</span>
                <span className="project-badge">COMPUTER VISION</span>
              </div>

              <h3>AI Surveillance System</h3>

              <p className="project-subtitle">
                Real-Time AI-Based Surveillance
              </p>

              <p className="project-description">
                A computer vision surveillance system using YOLO and OpenCV
                for real-time person detection, motion-triggered recording,
                snapshot capture and Telegram alerts.
              </p>

              <div className="project-tech">
                <span>Python</span>
                <span>OpenCV</span>
                <span>YOLO</span>
                <span>Telegram</span>
              </div>

              <div className="project-links">
                <a
                  href="https://github.com/Saishh34/AI-Surveillance-v4"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>
              </div>
            </div>

            {/* E-Commerce */}
            <div className="project-card">
              <div className="project-top">
                <span className="project-number">03</span>
                <span className="project-badge">FULL STACK</span>
              </div>

              <h3>E-Commerce Product Catalog</h3>

              <p className="project-subtitle">
                Full-Stack Product Management System
              </p>

              <p className="project-description">
                A full-stack web application with authentication, CRUD
                operations, REST APIs, product search and pagination.
              </p>

              <div className="project-tech">
                <span>React.js</span>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>MySQL</span>
                <span>MongoDB</span>
              </div>

              <div className="project-links">
                <a
                  href="https://github.com/Saishh34"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>
              </div>
            </div>

          </div>
        </section>
        {/* ACHIEVEMENTS & CERTIFICATIONS */}
        <section className="credentials-section">
          <div className="section-heading">
            <span>05</span>
            <h2>Achievements</h2>
          </div>

          <div className="achievements-grid">
            <div className="achievement-card featured-achievement">
              <span className="achievement-icon">🏆</span>

              <div>
                <span className="achievement-label">
                  SMART INDIA HACKATHON 2025
                </span>

                <h3>Winner — Software Edition</h3>

                <p>
                  Recognized as a winning team at Smart India Hackathon 2025
                  for the EcoFarming project.
                </p>
              </div>
            </div>

            <div className="achievement-card">
              <span className="achievement-number">02</span>

              <h3>Vortexa 2.0</h3>

              <p>
                Secured <strong>9th position</strong> in the 12-Hour Hackathon.
              </p>
            </div>

            <div className="achievement-card">
              <span className="achievement-number">03</span>

              <h3>Sports</h3>

              <p>
                State-level badminton player and district-level ball badminton
                player.
              </p>
            </div>
          </div>

          <div className="certifications-heading">
            <span>06</span>
            <h2>Certifications & Workshops</h2>
          </div>

          <div className="certifications-list">
            <div className="certification-item">
              <div>
                <h3>Web Development Workshop</h3>
                <p>Techfest — IIT Bombay</p>
              </div>

              <span>Workshop</span>
            </div>

            <div className="certification-item">
              <div>
                <h3>
                  Innovation, Design & Entrepreneurship (IDE) Bootcamp
                </h3>
                <p>AICTE / Wadhwani Foundation</p>
              </div>

              <span>Bootcamp</span>
            </div>

            <div className="certification-item">
              <div>
                <h3>CCNA 200-301 Network Fundamentals</h3>
                <p>Simplilearn SkillUp</p>
              </div>

              <span>Certificate</span>
            </div>
          </div>
        </section>
                {/* EDUCATION */}
        <section id="education" className="education-section">
          <div className="section-heading">
            <span>07</span>
            <h2>Education</h2>
          </div>

          <div className="education-list">

            <div className="education-item">
              <div className="education-year">
                2023 — Present
              </div>

              <div className="education-content">
                <h3>B.Tech in Computer Science Engineering</h3>

                <p className="education-institute">
                  Dr. D. Y. Patil Institute of Engineering, Management &
                  Research, Pune
                </p>

                <p className="education-status">
                  Currently pursuing Computer Science Engineering
                </p>
              </div>
            </div>

            <div className="education-item">
              <div className="education-year">
                2023
              </div>

              <div className="education-content">
                <h3>Higher Secondary Certificate (HSC) — Science</h3>

                <p className="education-institute">
                  Maharashtra State Board
                </p>

                <p className="education-status">
                  Science Stream · Computer Science
                </p>
              </div>
            </div>

            <div className="education-item">
              <div className="education-year">
                2021
              </div>

              <div className="education-content">
                <h3>Secondary School Certificate (SSC)</h3>

                <p className="education-institute">
                  Central Board of Secondary Education (CBSE)
                </p>
              </div>
            </div>

          </div>
        </section>

              

        {/* CONTACT */}
        <section id="contact" className="contact-section">
          <div className="section-heading">
            <span>08</span>
            <h2>Let's Connect</h2>
          </div>

          <div className="contact-grid">
            <div className="contact-intro">
              <h3>
                Have a project, opportunity, or idea?
              </h3>

              <p>
                I'm open to internships, software development opportunities,
                collaborations and interesting projects.
              </p>
            </div>

            <div className="contact-links">
              <a
                href="mailto:your-email@example.com"
                className="contact-item"
              >
                <span className="contact-label">Email</span>
                <span className="contact-value">
                  saishkenekar2005@gmail.com ↗
                </span>
              </a>

              <a
                href="https://github.com/Saishh34"
                target="_blank"
                rel="noreferrer"
                className="contact-item"
              >
                <span className="contact-label">GitHub</span>
                <span className="contact-value">
                  Saishh34 ↗
                </span>
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="contact-item"
              >
                <span className="contact-label">LinkedIn</span>
                <span className="contact-value">
                  LinkedIn Profile ↗
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <div>
            <strong>SK.</strong>
            <span>© 2026 Saish Kenekar</span>
          </div>

          <p>
            Built with React.js & Vite
          </p>
        </footer>
      
      </main>
    </div>
  );
}

export default App;