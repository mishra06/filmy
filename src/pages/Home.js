import React, { useState } from 'react'
import BannerSection from '../components/BannerSection'
import { useSelector } from 'react-redux';
// import Card from '../components/Card';
import HorizontalScollCard from '../components/HorizontalScollCard';
import useFetch from '../hook/useFetch';


function Home() {
  
  const trending = useSelector(state => state.movieData.bannerData);
  const { data : nowPlayingData } = useFetch('/movie/now_playing')
  const { data : topRatedData } = useFetch('/movie/top_rated')
  const { data : popularTvShowData } = useFetch('/tv/popular')
  const { data : onTheAirShowData } = useFetch('/tv/on_the_air')
  const { data : upComming } = useFetch('/movie/upcoming')
  const { data : topRatedTvShow } = useFetch('/tv/top_rated')

  
  return (
    <div>
      <BannerSection/>
      <HorizontalScollCard data={trending} heading={"Trending"} trending={true}/>
      <HorizontalScollCard data={nowPlayingData} heading={"Now Playing"} media_type={"movie"}/>
      <HorizontalScollCard data={topRatedData} heading={"Top Rated Movie's"} media_type={"movie"}/>
      <HorizontalScollCard data={upComming} heading={"UpComing Movie's"} media_type={"movie"}/>
      <HorizontalScollCard data={popularTvShowData} heading={"Popular TV Show"} media_type={"tv"}/>
      <HorizontalScollCard data={topRatedTvShow} heading={"Top Rated Tv Show's"} media_type={"tv"}/>
      <HorizontalScollCard data={onTheAirShowData} heading={"On The Air"} media_type={"tv"}/>
      

      
    </div>
  )
}

export default Home
