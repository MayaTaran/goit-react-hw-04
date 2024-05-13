import { useState } from 'react'
import './App.css'
import { FetchImages } from './articles-api.js';
import { Loader } from './components/Loader/Loader.jsx';
import { SearchBar} from './components/SearchBar/SearchBar.jsx';
import {ImageGallery } from './components/ImageGallery/ImageGallery.jsx'

const App = () => {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);

  const handleSearch = async (searchQuery) => {
    setLoading(true);

    try {
      const fetchedImages = await FetchImages(searchQuery); 
      setImages(fetchedImages); 
    } catch (error) {
      console.error('Error fetching images:', error);
    }

    setLoading(false);
  };

  return (
    <div>
   
      <SearchBar onSubmit={handleSearch} />
      <ImageGallery images={images} />
      {loading && <Loader />}
    </div>
  );
};
export default App
