import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectObject} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectObject
  return (
    <div className="card-container">
      <img src={imageUrl} alt="project" className="project-image" />
      <div className="title-container">
        <h1 className="title">{projectTitle}</h1>
        <div className="duration-container">
          <AiFillCalendar className="icon" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a href={projectUrl} type="submit" className="view-link">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
