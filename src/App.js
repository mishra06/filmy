
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileNavigation from './components/MobileNavigation';
import axios from 'axios';
import { useEffect } from 'react';
import {setBannerData, setImageUrl} from "../src/store/moviesSlice";
import { useDispatch } from 'react-redux';

function App() {

  const dispatch = useDispatch();

  const fetchTrendingData = async()=>{
    try {
      const response = await axios.get('/trending/all/day');
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
  }


  useEffect(()=>{
    fetchTrendingData();
    fetchConfiguration();
  },[]);


  return (
    <div>
      <Header/>
      <div className='pt-16'>
        <Outlet/>
      </div>
      <Footer/>
      <MobileNavigation/>
    </div>
  );
}

export default App;
