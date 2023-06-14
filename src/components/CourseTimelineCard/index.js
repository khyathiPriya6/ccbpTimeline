import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseObject} = props
  const {courseTitle, description, duration, tagsList} = courseObject
  return (
    <div className="card-container">
      <div className="title-container">
        <h1 className="title">{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle className="icon" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <div className="tags-list-container">
        {tagsList.map(eachTag => (
          <div className="each-tag-container">
            <p>{eachTag.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
