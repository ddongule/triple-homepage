import React from 'react'

import './index.scss'
import triple3x from '../../assets/images/triple@2x.png'
import appStore from '../../assets/images/app-store@2x.png'
import playStore from '../../assets/images/play-store@2x.png'
import ImageWithInfo from '../ImageWithInfo'
import InfoText from '../InfoText'

const StatisticSection = () => {
  return (
    <section className="statistics-wrapper">
      <div className="content-logo">
        <ImageWithInfo
          imageSrc={triple3x}
          infoText="2019년 2월 기준"
          align="col"
        />
      </div>

      <div className="awards-details">
        <div className="info">
          <InfoText emphasisText="350만 명" contents="의 사용자" />
          <InfoText emphasisText="21만 개" contents="의 여행 리뷰" />
          <InfoText emphasisText="650만 개" contents="의 여행 일정" />
        </div>

        <div className="details">
          <ImageWithInfo
            imageSrc={playStore}
            infoText={`2018 구글 플레이스토어 \n 올해의 앱 최우수상 수상`}
          />
          <ImageWithInfo
            imageSrc={appStore}
            infoText={`2018 애플 앱스토어 \n 오늘의 여행앱 선정`}
          />
        </div>
      </div>
    </section>
  )
}

export default StatisticSection
