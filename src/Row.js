//step 33
import React, { useEffect, useState } from 'react'
import './Row.css'
import axios from './axios';
                                 //step 35
function Row({title , fetchUrl , isLargeRow = false}) {
//step 36
const [movie , setMovie] = useState([]);

//step 38
const base_url= "https://image.tmdb.org/t/p/original/"

useEffect(() => {
async function fetchData() {
    const response = await axios.get(fetchUrl);
    setMovie(response.data.results);
    return response;
}

   fetchData();
}, [fetchUrl])

console.log(movie);
  return (
    <div className='row'>
        {/*step 34 */}
        <h2>{title}</h2>
                {/*step 40  back to css 41 */}
       <div className="row_posters">
         {/*step 37*/}
         {movie.map(
          (movies)  => 
         //44 render if exists 
          ( (isLargeRow && movies.poster_path) || 
          (!isLargeRow && movies.backdrop_path)) && (
//step 45 delpoy by firebase // step 46 setup firebase // install reac-router step 48 app js

            <img
                            //step 38
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            key={movies.id}
            //step 39
            src={`${base_url}${
                isLargeRow ? movies.poster_path : movies.backdrop_path
            }`} alt={movies.name} />
          )
      )}

       </div>
        
    </div>
  )
}

export default Row;