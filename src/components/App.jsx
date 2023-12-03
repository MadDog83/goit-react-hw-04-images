import React from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import './styles.css';

class App extends React.Component {
  state = {
    images: [],
    loading: false,
    page: 1,
    query: '',
    largeImageURL: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
      this.fetchImages();
    }
  }

  fetchImages = async () => {
    const { query, page } = this.state;

    if (!query) return;

    this.setState({ loading: true });

    const response = await fetch(`https://pixabay.com/api/?q=${query}&page=${page}&key=40208073-fe15c78bde1673dee4f2a3659&image_type=photo&orientation=horizontal&per_page=12`);
    const data = await response.json();

    this.setState(state => ({
      images: [...state.images, ...data.hits],
      loading: false,
    }));
  };

  handleSearch = query => {
    this.setState({ images: [], query, page: 1 });
  };

  loadMore = () => {
    this.setState(state => ({ page: state.page + 1 }));
  };

  openModal = largeImageURL => {
    this.setState({ largeImageURL });
  };

  closeModal = () => {
    this.setState({ largeImageURL: null });
  };

  render() {
    const { images, loading, largeImageURL } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSearch} />
        {loading && <Loader />}
        <ImageGallery images={images} onSelect={this.openModal} />
        {images.length > 0 && !loading && <Button onClick={this.loadMore} imagesLoaded={!loading} />}
        {largeImageURL && <Modal largeImageURL={largeImageURL} onClose={this.closeModal} />}
      </div>
    );
  }
}


export default App;