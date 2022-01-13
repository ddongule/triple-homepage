import React from 'react'

import './index.scss'

import ImageWithInfo from '../ImageWithInfo'
import InfoText from '../InfoText'
import { statisticInfos } from '../../data/statics'

const StatisticSection = () => {
  const { contentMain, awardDetails, details } = statisticInfos

  return (
    <section className="statistics-wrapper">
      <div className="content-logo">
        {contentMain.map(([img, text], idx) => (
          <ImageWithInfo imageSrc={img} infoText={text} align="col" key={idx} />
        ))}
      </div>

      <div className="awards-details">
        <div className="info">
          {awardDetails.map(([emphasis, rest], idx) => (
            <InfoText emphasisText={emphasis} contents={rest} key={idx} />
          ))}
        </div>

        <div className="details">
          {details.map(([img, text], idx) => (
            <ImageWithInfo imageSrc={img} infoText={text} key={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatisticSection
