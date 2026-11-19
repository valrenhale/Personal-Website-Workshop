export default function ProjectCard({
  title,
  description,
  tags,
  github,
  demo,
}) {
  return (
    <article className="project-card">
      <div className="project-image" aria-hidden="true">
        <span></span>
      </div>

      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>

        <div className="tag-list" aria-label={`${title} technologies`}>
          {tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>

        <div className="project-links">
          <a className="text-link" href={github} target="_blank" rel="noreferrer">
            GitHub <span aria-hidden="true">↗</span>
          </a>

          <a className="text-link" href={demo} target="_blank" rel="noreferrer">
            Live site <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </article>
  )
}
