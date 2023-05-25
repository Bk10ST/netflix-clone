
//step 17
import React, { useEffect, useState } from 'react'
import './Banner.css';
import axios from './axios';
import requests from './Request';

function Banner() {
    //step 26
    const [movie , setMovie] =useState([]);

    //step 27
    useEffect(()=> {
        async function fetchData(){
            //fetching movie
            const request= await axios.request(requests.fetchNetflixOriginal);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length -1) //creating a randon number which goes from 0 to lenght of request 

                ]
            );
            return request;
        }
        fetchData();
    }, [])
    console.log(movie)

    //step 23 
  function truncate(string , n){
        return string?.length > n ? string.substring(0, n - 1) + '.....' : string; // mange text description descriptin after this step 24 got to tmdb to fetch api and create file name axios
        //step 
    }
  return (
                     /*step 18 add image */
   <header className="banner" style={{
    backgroundPosition: "center center",
      //step 28 console url img back drop https://image.tmdb.org/t/p/orginial/${movie?}backdrop
    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path
}")`,//when image is in string
    backgroundSize: "cover"
    /*step 19 css */

   }}>
    {/*step 20*/} 
    <div className="banner-contain">
        {/*step 29 add movie name*/}
        <h1 className="banner-title">
            {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner-button">
            <button className='banner_button'>Play</button>
            <button className='banner_button'>My List</button>
        </div>
        {/*step 30 add description  after adding description to wensite // step 31 go to app css*/}
        <h1 className="banner-description">
           {truncate(movie?.overview, 150)}
        </h1>
    </div>

{/*step 21  // sgep 22 css */}
<div className="banner--fadeButton"/>
   </header>
  )
}

export default Banner