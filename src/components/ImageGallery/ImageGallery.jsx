import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, onSelect }) => {
  return (
    <ul className="ImageGallery">
      {images.map((image, index) => (
  <ImageGalleryItem key={`${image.id}_${index}`} {...image} onClick={onSelect} />
))}
    </ul>
  );
};

export default ImageGallery;