import axios, { Axios } from "axios";
axios.defaults.baseURL = 'https://api.unsplash.com/photos/?client_id=a1H_AtFOEkWvv8Iub7bmeGi3QR7fGIu7W9aQWNXaVBU/'
export const fetchImages = async (searchQuery) => {
    const response = await axios.get("GET /search/photos/", {
        params: {
            query: searchQuery,
            
        }
    });
    return response.data.hits;
 };