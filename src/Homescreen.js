//step 2

import React from 'react'

//step 3
import './Homescreen.css'
import Nav from './Nav'
import Banner from './Banner'
import Row from './Row'
import requests from './Request';

function Homescreen() {
  return (
    <div className='Homescreen'>
        {/*step 4 */}

         {/*navbar step 8  // step 9 got to navbar add img  */}
         <Nav/>
       
          

          {/*banner  //step 16 // step 17 create banner file*/}
          <Banner/>

           {/*row   step 5 create navbar folder */}
          {/*step 32*/}
      <Row 
      title=" Netflix Original's"
      fetchUrl= {requests.fetchNetflixOriginal}
      isLargeRow
      />
        <Row 
      title="top rated"
      fetchUrl= {requests.fetchTopRated}
      isLargeRow
      />
      
      <Row 
      title="actioin movies"
      fetchUrl= {requests.fetchActionMovies}
      isLargeRow
      />
      
      <Row 
      title="Comedy Movies"
      fetchUrl= {requests.fetchComedyMovies}
      isLargeRow
      />
      
      <Row 
      title="Horror Movies"
      fetchUrl= {requests.fetchHorrorMovies}
      isLargeRow
      />
      
      <Row 
      title="Romance Movies"
      fetchUrl= {requests.fetchRomanceMovies}
      isLargeRow
      />
        <Row 
      title="Documentaries"
      fetchUrl= {requests.fetchDocumentaries}
      isLargeRow
      />
      {/*step 33 create row.js */}
      

    </div>
  )
}

export default Homescreen