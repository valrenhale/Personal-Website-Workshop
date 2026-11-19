import { useState } from 'react'
import ProjectCard from './components/ProjectCard.jsx'

const projects = [
  {
    title: 'Low Voltage Battery Management System',
    description: 'Crafting low voltage battery management system (BMS) for new in-house battery against damage to transmit data metrics such as voltage, current, and temperature by checking the CRC bit for validation over network.',
    tags: ['C++', 'SPI'],
    github: 'https://github.com/valrenhale',
    demo: '#contact',
  },
  {
    title: '1988 Corvette C4 Interior Restoration',
    description: 'Restoring a classic 1988 Corvette C4 with modern upgrades and enhancements with firewall, differential brace, throttle cable brace, flat sheet metal car bed, and other modifications.',
    tags: ['Autodesk Fusion CAD', 'Hands-on Design'],
    github: 'https://github.com/valrenhale',
    demo: '#contact',
  },
  {
    title: 'Project Three',
    description: 'Your website does not need to be finished to show what you are learning and creating.',
    // A short description of something you built, researched, designed, or care about.
    // You can also include a link to a live demo or GitHub repo if you have one.
    // Use this card to share a class project, organization, internship, or personal interest.
    tags: ['Learning', 'Growth'],
    github: 'https://github.com/valrenhale',
    demo: '#contact',
  },
]

const skills = [
  'Python',
  'Java',
  'React',
  'GitHub',
  'Data Analysis',
]

function Nav({ isDarkMode, toggleDarkMode }) {
  return (
    <nav className="nav" aria-label="Main navigation">
      <a className="logo" href="#home">
        SU<span>.</span>
      </a>

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <button
        className="theme-button"
        onClick={toggleDarkMode}
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? '☀ Light' : '☾ Dark'}
      </button>
    </nav>
  )
}

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={isDarkMode ? 'app dark-mode' : 'app'}>
      <Nav isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <main>
        <section className="hero" id="home">
          <div>
            <p className="eyebrow">Hello, I’m</p>
            <h1>Sofia Utama.</h1>
            <h2>I build, learn, and create.</h2>

            <p className="hero-copy">
              I’m a student and aspiring <strong>computer engineer</strong> who
              enjoys using technology to solve meaningful problems.
            </p>

            <div className="hero-buttons">
              <a className="button" href="#projects">
                See my work <span aria-hidden="true">↓</span>
              </a>

              <a
                className="resume-button"
                href={`${import.meta.env.BASE_URL}sresume.pdf`}
                target="_blank"
                rel="noreferrer"
              >
                View résumé <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="profile-frame">
            <img
              className="profile-photo"
              src={`${import.meta.env.BASE_URL}sprofile.jpg`}
              alt="My profile photo"
            />
          </div>
        </section>

        <section className="section about" id="about">
          <div>
            <p className="eyebrow">A little about me</p>
            <h2>More than a résumé.</h2>
          </div>

          <div className="about-copy">
            <p>
              I'm a first-year computer engineering student at Cal Poly SLO 
              with a strong passion for integrating hardware with software. 
              I am currently on the firmware subsystem at Cal Poly Racing.
            </p>

            <p>
              I am also a member of Cal Poly WISH, where I meet with other 
              women in STEM to discuss our experiences and support each other.
            </p>
          </div>
        </section>

        <section className="section" id="skills">
          <p className="eyebrow">Things I use</p>
          <h2>Skills and tools</h2>

          <div className="skills-list">
            {skills.map((skill) => (
              <span className="skill" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <p className="eyebrow">Where I’ve learned</p>
          <h2>Experience</h2>

          <div className="experience-list">
            <article className="experience-item">
              <div>
                <p className="experience-date">Summer 2025</p>
                <h3>Software Engineer Intern</h3>
                <p className="experience-place">Roku</p>
              </div>

              <p>
                Optimized full-stack tic-tac-toe trivia game 
                for Roku TV channel through implementing 
                backend and frontend company-specific 
                coding languages BrightScript, SceneGraph for enhanced 
                performance and game state handling.
              </p>
            </article>

            <article className="experience-item">
              <div>
                <p className="experience-date">Summer 2024</p>
                <h3>AI/ML Research Intern</h3>
                <p className="experience-place">Nvidia x San Jose Works</p>
              </div>

              <p>
                Launched AI recycling categorization machine 
                utilizing preexisting YOLOv5 model through research 
                on deep learning with Nvidia mentor by pairing 
                YOLOv5 computer vision detection model with 
                supervised learning data set.
                Achieved 75% accuracy in detecting trash and recyclables 
                in AI recycling detection performance.
              </p>
            </article>
          </div>
        </section>

        <section className="section" id="projects">
          <p className="eyebrow">Things I’ve worked on</p>
          <h2>Featured projects</h2>

          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        <section className="contact" id="contact">
          <p className="eyebrow">Let’s connect</p>
          <h2>Have an idea or opportunity?</h2>
          <p>I’d love to hear from you.</p>

          <a className="button light" href="mailto:sutama@calpoly.edu">
            Say hello
          </a>

          <div className="social-links">
            <a
              href="https://github.com/valrenhale"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/sofia-utama"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer>Built with React + Vite · Make it yours.</footer>
    </div>
  )
}
