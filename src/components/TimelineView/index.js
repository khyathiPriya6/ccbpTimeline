import {Component} from 'react'
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

class TimelineView extends Component {
  renderCards = eachItem => {
    if (eachItem.categoryId === 'COURSE') {
      return <CourseTimelineCard courseObject={eachItem} />
    }
    return <ProjectTimelineCard projectObject={eachItem} />
  }

  render() {
    const {timelineItemsList} = this.props

    const titles = timelineItemsList.map(item => ({
      title: item.title,
    }))

    return (
      <div className="app-container">
        <h1 className="title-para">MY JOURNEY OF</h1>
        <h1 className="title-heading">CCBP 4.0</h1>
        <Chrono
          mode="VERTICAL_ALTERNATING"
          items={titles}
          theme={{
            primary: 'blue',
            secondary: 'white',
            cardBgColor: 'white',
            cardForeColor: 'white',
            titleColor: 'blue',
          }}
        >
          {timelineItemsList.map(eachItem => this.renderCards(eachItem))}
        </Chrono>
      </div>
    )
  }
}

export default TimelineView
