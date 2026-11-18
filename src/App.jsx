import { useState } from 'react'
import ProjectCard from './components/ProjectCard.jsx'

const projects = [
  {
    title: 'Project One',
    description: 'A short description of something you built, researched, designed, or care about.',
    tags: ['React', 'CSS'],
    github: 'https://github.com/valrenhale',
    demo: '#contact',
  },
  {
    title: 'Project Two',
    description: 'Use this card to share a class project, organization, internship, or personal interest.',
    tags: ['JavaScript', 'Design'],
    github: 'https://github.com/valrenhale',
    demo: '#contact',
  },
  {
    title: 'Project Three',
    description: 'Your website does not need to be finished to show what you are learning and creating.',
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
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                target="_blank"
                rel="noreferrer"
              >
                View résumé <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="profile-placeholder" aria-label="Your future profile photo">
            <span>Your</span>
            <strong>Photo</strong>
            <small>Optional Part 2 upgrade</small>
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
                <p className="experience-date">2025 - Present</p>
                <h3>Your Current Role</h3>
                <p className="experience-place">Organization or Company Name</p>
              </div>

              <p>
                Add one or two sentences about what you do, what you’ve learned,
                or the impact you’ve made in this role.
              </p>
            </article>

            <article className="experience-item">
              <div>
                <p className="experience-date">2024 - 2025</p>
                <h3>Previous Role or Organization</h3>
                <p className="experience-place">Organization or Company Name</p>
              </div>

              <p>
                You can also include internships, clubs, research, volunteer
                experiences, or meaningful class projects here.
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
