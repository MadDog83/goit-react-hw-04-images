import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends React.Component {
  render() {
    const { images, onSelect } = this.props;

    return (
      <ul className="ImageGallery">
        {images.map(image => (
          <ImageGalleryItem key={image.id} {...image} onClick={onSelect} />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;