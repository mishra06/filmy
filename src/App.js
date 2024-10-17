
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileNavigation from './components/MobileNavigation';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {setBannerData, setImageUrl} from "../src/store/moviesSlice";
import { useDispatch } from 'react-redux';
import ShimmerEffect from './shimmer/ShimmerEffect';

function App() {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const fetchTrendingData = async()=>{
    
    try {
      const response = await axios.get('/trending/all/week');
      // console.log('Received trending data:', response.data.results); // Log the actual data
      dispatch(setBannerData(response.data.results))
  } catch (error) {
      if (error.response) {
          console.error('Error fetching trending data:', error.response.status, error.response.data);
      } else if (error.request) {
          console.error('No response received:', error.request);
      } else {
          console.error('Error:', error.message);
      }
  }
  }

  const fetchConfiguration = async()=>{
    try {
        const response = await axios.get("/configuration")
        // console.log(response.data.images.secure_base_url,"responseees");
        dispatch(setImageUrl(response.data.images.secure_base_url+"original"))
    } catch (error) {
      if (error.response) {
          console.error('Error fetching configuration:', error.response.status, error.response.data);
      } else if (error.request) {
          console.error('No response received:', error.request);
      } else {
          console.error('Error:', error.message);
      }
      
    }
    finally{
      setLoading(false); 
    }
  }


  useEffect(()=>{
      fetchTrendingData();
      fetchConfiguration();
    
  },[]);


  return (
    <main className='pb-14 lg:pb-0'>
      <Header/>
      <div className='min-h-[90vh]'>
        <Outlet/>
      </div>
      <Footer/>
      <MobileNavigation/>
    </main>
  );
}

export default App;
