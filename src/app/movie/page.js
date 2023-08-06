import React, { useState, useEffect } from 'react';
import Movie from '@/components/Movie';

const Page = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const url = process.env.RAPID_KEY;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'f2194a27d3mshc68cf2c54e4e23ep1e2e3ejsne8c62546c0a3',
          'X-RapidAPI-Host': 'netflix54.p.rapidapi.com',
        },
      };

      try {
        const res = await fetch(url, options);
        const data = await res.json();
        const main_data = data.titles;
        const movies = main_data.filter((curElem) => curElem.jawSummary.type === 'movie');
        setMovies(movies);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='mt-20'>
      <h1 className='flex justify-center text-2xl m-3'>Movies</h1>
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 mx-4'>
        {loading ? (
          <p>Loading...</p>
        ) : (
          movies.map((curElem) => <Movie key={curElem.id} {...curElem.jawSummary} />)
        )}
      </div>
    </div>
  );
};

export default Page;
