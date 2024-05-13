import React from 'react';

export const ImageGallery = ({ images }) => {
  return (
    <div>
      {images.map(image => (
        <img key={image.id} src={image.url} alt={image.alt} />
      ))}
    </div>
  );
};

