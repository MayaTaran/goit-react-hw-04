import axios from "axios";

axios.defaults.baseURL = 'https://api.unsplash.com/';

export const FetchImages = async (searchQuery) => {
    try {
        const response = await axios.get("/search/photos", {
            params: {
                query: searchQuery,
                client_id: 'a1H_AtFOEkWvv8Iub7bmeGi3QR7fGIu7W9aQWNXaVBU'
            }
        
        });
        console.log(response.data.results);
              return response.data.results;
    } catch (error) {
        console.error("Error fetching images:", error);
        
        return [];
    }
};
