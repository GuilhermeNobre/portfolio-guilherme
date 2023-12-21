import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact,
  DiPython,
  DiPostgresql
} from "react-icons/di";

import '../styles/components/technologiescontainer.sass'

const technologies = [
  { id: "python", name: "Python", icon: <DiPython /> },
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "Postgres", name: "Postgres", icon: <DiPostgresql /> },
];

const TechologiesContainer = () => {
  return (
    <section className="technologies-containter">
      <h2>Tecnologias</h2>
      <div className="technologias-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technoloy-info">
              <h3>{tech.name}</h3>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechologiesContainer