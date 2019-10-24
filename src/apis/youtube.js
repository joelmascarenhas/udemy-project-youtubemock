import axios from 'axios';

const KEY = 'AIzaSyA7KvDyCzZFiHNvMN3nhR36ARlbArcKReA';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY     
    }
});