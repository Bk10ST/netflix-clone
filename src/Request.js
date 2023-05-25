//step 25

//typically we could stored in {process.env.API_KEY}

const API_KEY= "d528977c4ca85b395e5323a3acfc0961";


const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginal: `/discover/tv?api_key=${API_KEY}&with_networls=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_geners=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_geners=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_geners=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_geners=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_geners=99`,
};
 export default requests;
 //step 26 go to banner