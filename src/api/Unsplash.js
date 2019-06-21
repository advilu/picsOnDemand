import axios from 'axios';

//creates a customized instance of axios to a specific url with specific parameters
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`
    }
})