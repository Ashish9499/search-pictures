import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID WCVKt2lAQT6l5B2qh-kDkpS6XqrOmsDCrUNej7jPcYs'
       }
});