import { useState, useEffect } from "react";
import "./App.css";

const RESUME_URL =
  "https://raw.githubusercontent.com/Saishh34/resume-assets/main/Saish_Kenekar_Resume.pdf";

const PROJECTS = [
  {
    id: "ecofarming",
    number: "01",
    title: "EcoFarming (FutureToFarm)",
    badge: "SIH 2025 NATIONAL WINNER",
    featured: true,
    subtitle: "AI-Powered Gamified Sustainable Farming Platform",
    problem:
      "Smallholder farmers often lack accessible, data-driven agronomy guidance and financial motivation to adopt eco-friendly farming practices.",
    features: [
      "AI crop health guidance and sustainable practice recommendations powered by Gemini AI.",
      "Gamified milestone progression with rewards system encouraging resource preservation.",
      "Community forum with secure user authentication for regional knowledge sharing.",
    ],
    tech: ["React.js", "Node.js", "Firebase", "Gemini AI", "Vercel"],
    demoUrl: "https://eco-farming-three.vercel.app/",
    githubUrl: "https://github.com/Saishh34",
  },
  {
    id: "ai-surveillance",
    number: "02",
    title: "AI Surveillance System",
    badge: "COMPUTER VISION · EDGE AI",
    featured: false,
    subtitle: "Real-Time AI-Based Surveillance & Automated Security Alerts",
    problem:
      "Conventional security cameras passively record continuous footage without automated threat triage or immediate situational awareness.",
    features: [
      "Real-time person and object detection utilizing YOLO neural architectures and OpenCV.",
      "Motion-triggered recording logic minimizing continuous storage overhead.",
      "Automated event snapshot capture with instant real-time Telegram bot alerts.",
    ],
    tech: ["Python", "OpenCV", "YOLO", "Telegram Bot API"],
    demoUrl: null,
    githubUrl: "https://github.com/Saishh34/AI-Surveillance-v4",
  },
  {
    id: "ecommerce-catalog",
    number: "03",
    title: "E-Commerce Product Catalog",
    badge: "FULL STACK · INTERNSHIP",
    featured: false,
    subtitle: "Full-Stack Inventory & Catalog Management System",
    problem:
      "Modern e-commerce backends demand structured product schemas, reliable pagination, and low-latency filtering across multi-category catalogs.",
    features: [
      "Full-stack CRUD workflows for inventory items with category sorting and real-time search.",
      "Scalable RESTful API architecture with database query optimization and pagination.",
      "Developed, tested with Postman, and integrated during Full-Stack Internship at Codec Technologies.",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MySQL", "MongoDB"],
    demoUrl: null,
    githubUrl: "https://github.com/Saishh34",
  },
  {
    id: "ticketpilot",
    number: "04",
    title: "TicketPilot",
    badge: "RAG · GENAI · N8N",
    featured: false,
    subtitle: "AI-Powered Support Ticket Automation",
    description:
      "A full-stack support-ticket automation MVP that uses retrieval-augmented generation (RAG) to draft knowledge-grounded responses, with human review and approval.",
    problem:
      "A full-stack support-ticket automation MVP that uses retrieval-augmented generation (RAG) to draft knowledge-grounded responses, with human review and approval.",
    features: [
      "Knowledge-document ingestion and RAG-based response generation drafting context-grounded replies.",
      "CSV, XLS, and XLSX bulk ticket import integrated with an operational ticket dashboard.",
      "Human-in-the-loop review, response approval workflow, and source citation inspection.",
    ],
    tech: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "Gemini",
      "LangChain",
      "ChromaDB",
      "n8n",
    ],
    demoUrl: "https://ticketpilot-beta.vercel.app",
    githubUrl: "https://github.com/Saishh34/TicketPilot",
  },
  {
    id: "prioritypower",
    number: "05",
    title: "PriorityPower",
    badge: "FIELD OPS · AIRTABLE",
    featured: false,
    subtitle: "Field Service & Financial Operations",
    description:
      "A mobile-first field-service and expense-management MVP for customer, job, technician expense, receipt, and financial tracking.",
    problem:
      "A mobile-first field-service and expense-management MVP for customer, job, technician expense, receipt, and financial tracking.",
    features: [
      "Dedicated Employee and Admin portals for customer and job management.",
      "Expense submissions with receipt attachments and structured manager review.",
      "Financial KPIs, operational tracking dashboards, and CSV data exports.",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Airtable"],
    demoUrl: "https://exp-tracker-v1-one.vercel.app",
    githubUrl: "https://github.com/Saishh34/ExpTracker-v1",
  },
  {
    id: "flowdesk",
    number: "06",
    title: "FlowDesk",
    badge: "HEALTHCARE · TRIAGE PROTOTYPE",
    featured: false,
    subtitle: "Healthcare Intake & Triage Engine",
    description:
      "A healthcare intake and staff-triage prototype that guides patients through a seven-step intake workflow and gives staff a dashboard for reviewing and managing cases.",
    problem:
      "A healthcare intake and staff-triage prototype that guides patients through a seven-step intake workflow and gives staff a dashboard for reviewing and managing cases.",
    features: [
      "Guided 7-step patient intake workflow with heuristic triage and simulated scoring.",
      "Staff triage queues with filtering, case review actions, and workflow state transitions.",
      "Operational KPI summaries, prototype audit logs, and n8n webhook integrations.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "n8n"],
    demoUrl: null,
    githubUrl: "https://github.com/trailtracker29/virginialung",
  },
  {
    id: "quickdrop",
    number: "07",
    title: "QuickDrop",
    badge: "WEBRTC · P2P FILE TRANSFER",
    featured: false,
    subtitle: "Peer-to-Peer File Transfer",
    description:
      "A privacy-focused file-sharing MVP that transfers files directly between browsers using encrypted WebRTC DataChannels, coordinated through a WebSocket signaling server.",
    problem:
      "A privacy-focused file-sharing MVP that transfers files directly between browsers using encrypted WebRTC DataChannels, coordinated through a WebSocket signaling server.",
    features: [
      "Direct browser-to-browser file transfers via encrypted WebRTC DataChannels.",
      "Temporary six-digit pairing codes with automatic 10-minute session expiry.",
      "Chunked file transfers with backpressure control, real-time speed/ETA, and multi-file queues.",
    ],
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "WebRTC",
      "WebSockets",
      "Tailwind CSS",
    ],
    demoUrl: null,
    githubUrl: null,
  },
];

const ACHIEVEMENTS = [
  {
    id: "sih-2025",
    featured: true,
    icon: "🏆",
    label: "SMART INDIA HACKATHON 2025",
    title: "Winner — Software Edition",
    description: (
      <>
        Recognized as a winning team at Smart India Hackathon 2025 for the
        EcoFarming project.
      </>
    ),
  },
  {
    id: "vortexa",
    title: "Vortexa 2.0",
    description: (
      <>
        Secured <strong>9th position</strong> in the 12-Hour Hackathon.
      </>
    ),
  },
  {
    id: "techcombat",
    title: "TechCombat 4.0 — Internal Hackathon 2025",
    description: (
      <>
        Participated in the internal hackathon held on 12 September 2025 at Dr.
        D. Y. Patil Institute of Engineering, Management &amp; Research, Akurdi,
        Pune. Represented team <strong>INNOVEDA</strong>, which was shortlisted
        for the Grand Finale as part of the Smart India Hackathon initiative.
      </>
    ),
  },
  {
    id: "ide-bootcamp",
    title: "IDE Bootcamp — Edition 3, Phase I",
    description: (
      <>
        Attended the five-day Innovation, Design and Entrepreneurship Bootcamp
        organised by <strong>AICTE</strong>, Ministry of Education, and Wadhwani
        Foundation at CMR Engineering College, Hyderabad, from 6–10 April 2026.
        Learned about idea pitching, entrepreneurship, investor networking,
        business development, and group pitching with feedback.
      </>
    ),
  },
  {
    id: "digital-marketing",
    title: "Introduction to Digital Marketing Fundamentals",
    description: (
      <>
        Successfully completed the online course on{" "}
        <strong>Simplilearn SkillUp</strong> on 17 April 2026, covering SEO and
        SEM basics, social media marketing, content and email marketing, and
        analytics and campaign strategy.
      </>
    ),
  },
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="portfolio">
      {/* ACCESSIBLE SKIP LINK */}
      <a href="#about" className="skip-link">
        Skip to main content
      </a>

      {/* NAVBAR */}
      <header className="navbar-wrapper">
        <nav className="navbar" aria-label="Main Navigation">
          <a href="#" className="logo" onClick={closeMobileMenu}>
            SK.
          </a>

          {/* Desktop Navigation Links */}
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="nav-actions">
            <a
              className="resume-btn desktop-resume"
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume ↗
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-menu"
            >
              {mobileMenuOpen ? (
                <svg
                  className="menu-icon"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg
                  className="menu-icon"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        <div
          id="mobile-nav-menu"
          className={`mobile-menu ${mobileMenuOpen ? "mobile-menu-open" : ""}`}
          aria-hidden={!mobileMenuOpen}
        >
          <div className="mobile-menu-content">
            <div className="mobile-nav-links">
              <a href="#about" onClick={closeMobileMenu}>
                About
              </a>
              <a href="#skills" onClick={closeMobileMenu}>
                Skills
              </a>
              <a href="#experience" onClick={closeMobileMenu}>
                Experience
              </a>
              <a href="#projects" onClick={closeMobileMenu}>
                Projects
              </a>
              <a href="#contact" onClick={closeMobileMenu}>
                Contact
              </a>
            </div>

            <div className="mobile-menu-footer">
              <a
                className="resume-btn"
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
              >
                Resume ↗
              </a>
            </div>
          </div>
        </div>
      </header>

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
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                className={`project-card ${project.featured ? "featured-project" : ""}`}
              >
                <div className="project-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-badge">{project.badge}</span>
                </div>

                <h3 className="project-title">{project.title}</h3>

                <p className="project-subtitle">{project.subtitle}</p>

                <div className="project-problem">
                  <span className="project-problem-label">Problem Addressed</span>
                  <p>{project.problem}</p>
                </div>

                <ul className="project-features">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>

                <div className="project-tech">
                  {project.tech.map((item, idx) => (
                    <span key={idx}>{item}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="primary-link"
                    >
                      Live Demo ↗
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub ↗
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* ACHIEVEMENTS & CERTIFICATIONS */}
        <section className="credentials-section">
          <div className="section-heading">
            <span>05</span>
            <h2>Achievements</h2>
          </div>

          <div className="achievements-grid">
            {ACHIEVEMENTS.map((achievement, index) => {
              const number = String(index + 1).padStart(2, "0");

              if (achievement.featured) {
                return (
                  <div
                    key={achievement.id}
                    className="achievement-card featured-achievement"
                  >
                    <span className="achievement-icon">{achievement.icon}</span>

                    <div>
                      <span className="achievement-number">{number}</span>

                      <span className="achievement-label">
                        {achievement.label}
                      </span>

                      <h3>{achievement.title}</h3>

                      <p>{achievement.description}</p>
                    </div>
                  </div>
                );
              }

              return (
                <div key={achievement.id} className="achievement-card">
                  <span className="achievement-number">{number}</span>

                  <h3>{achievement.title}</h3>

                  <p>{achievement.description}</p>
                </div>
              );
            })}
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
                href="mailto:saishkenekar2005@gmail.com"
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