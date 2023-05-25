//step 24 making request
import axios from 'axios' 
const instance= axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

export default instance;
//step 25 create a file request.js