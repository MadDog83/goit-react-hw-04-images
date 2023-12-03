import React from 'react';


class ImageGalleryItem extends React.Component {
  handleClick = () => {
    this.props.onClick(this.props.largeImageURL);
  };

  render() {
    const { id, webformatURL } = this.props;

    return (
      <li className="ImageGalleryItem" key={id} onClick={this.handleClick}>
        <img src={webformatURL} alt="" className="ImageGalleryItem-image" />
      </li>
    );
  }
}

export default ImageGalleryItem;