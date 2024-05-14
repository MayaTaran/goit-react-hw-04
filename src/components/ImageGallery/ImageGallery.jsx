import React from 'react';
import { ImageCard } from '../ImageCard/ImageCard.jsx'; 

export const ImageGallery = ({ images }) => {
  return (
    <div>
      {images.map((image) => (
         <ImageCard key={image.id} imageUrl={image.url} alt={image.alt} />
      ))}
    </div>
  );
};

