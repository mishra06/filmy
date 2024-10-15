import React from 'react'
import { useSelector } from 'react-redux'

const BannerSection = () => {

    const bannerData = useSelector(state => state.movieData.bannerData)
    console.log(bannerData,"bannerdata");
  return (
    <div>
      bannersection
    </div>
  )
}

export default BannerSection
