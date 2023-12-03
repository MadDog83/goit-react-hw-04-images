import React, { useState, useEffect } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import './styles.css';

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [largeImageURL, setLargeImageURL] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://pixabay.com/api/?q=${query}&page=${page}&key=40208073-fe15c78bde1673dee4f2a3659&image_type=photo&orientation=horizontal&per_page=12`);
        const data = await response.json();

        if (response.ok) {
          setImages(prevImages => [...prevImages, ...data.hits]);
        } else {
          throw new Error(data.message || 'Something went wrong');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const retryFetch = () => {
    setPage(1);
    setError(null);
  };

  const handleSearch = query => {
    setImages([]);
    setQuery(query);
    setPage(1);
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const openModal = largeImageURL => {
    setLargeImageURL(largeImageURL);
  };

  const closeModal = () => {
    setLargeImageURL(null);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={handleSearch} />
      {error && <div className="ErrorMessage">Error: {error} <button onClick={retryFetch}>Retry</button></div>}
      {loading && <Loader />}
      <ImageGallery images={images} onSelect={openModal} />
      {images.length > 0 && !loading && <Button onClick={loadMore} imagesLoaded={!loading} />}
      {largeImageURL && <Modal largeImageURL={largeImageURL} onClose={closeModal} />}
    </div>
  );
};

export default App;