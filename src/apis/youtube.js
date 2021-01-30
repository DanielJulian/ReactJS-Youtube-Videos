import axios from 'axios';

const KEY = 'AIzaSyCiVxlwsaXw_j-QozSCRlrET8lMdez6WUs';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

