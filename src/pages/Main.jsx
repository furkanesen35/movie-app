import React from 'react';

const API_KEY = "df17deb51dc339d3023e7f1807e2402e";
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`

const Main = () => {
  return (
    <div>
      <p>Main</p>
    </div>
  );
};

export default Main;
