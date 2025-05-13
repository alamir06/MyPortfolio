import ProjectCard from '../card/ProjectCard';
import '../styles/project.css';

const projects = [
  {
    title: 'Project1',
    description: 'This is a description for project 1.',
    imgSrc: 'https://picsum.photos/200/300',
  },
  {
    title: 'Project2',
    description: 'This is a description for project 2.',
    imgSrc: 'https://picsum.photos/200/300',
  },
  {
    title: 'Project3',
    description: 'This is a description for project 3.',
    imgSrc: 'https://picsum.photos/200',
  },
];

export default function ProjectsSection() {
  return (
    <section className="projects-section" id="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            id={index}
            title={project.title}
            description={project.description}
            imgSrc={project.imgSrc}
          />
        ))}
      </div>
    </section>
  );
}
