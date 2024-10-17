import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';
import debounce from 'lodash.debounce';
import useFetchDetails from '../hook/useFetchDetails';
import ShimmerEffect from '../shimmer/ShimmerEffect';


const ExplorePage = () => {
  const params = useParams()
  const { explore } = useParams(); // Destructure to get explore directly , means if we click on the tv then it will get the tv using parem and if we click on movie then it will take movie from param in explore we get the tv and movie when we console the param.
  const [pageNo, setPageNo] = useState(1);
  const [data, setData] = useState([]);
  // const { loading } = useFetchDetails(`/${params?.explore}/${params?.id}`)
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(`/discover/${explore}`, {
        params: { page: pageNo },
      });
      setData((prev) => [...prev, ...response.data.results]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    finally {
      setLoading(false);
    }
  };

  const debouncedHandleScroll = debounce(() => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight * 0.8) {
      setPageNo((prev) => prev + 1);
    }
  }, 500);

  useEffect(() => {
    fetchData();
  }, [pageNo]);

  useEffect(() => {
    setData([]); // Reset data on explore change
    setPageNo(1); // Reset page number
    fetchData();
  }, [explore]);

  useEffect(() => {
    window.addEventListener('scroll', debouncedHandleScroll);
    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
    };
  }, [debouncedHandleScroll]);

  if (loading) {
    return <div><ShimmerEffect/></div>
  }

  return (
    <div className='py-16'>
      <div className='container mx-auto'>
        <h3 className='capitalize text-lg lg:text-xl font-semibold my-3'>
          Popular {explore} show
        </h3>
        <div className='grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center lg:justify-start'>
          {data.map((exploreData) => (
            <Card
              data={exploreData}
              key={exploreData.id}
              media_type={explore}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;