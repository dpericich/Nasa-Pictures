import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'
});
