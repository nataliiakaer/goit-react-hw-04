import { useEffect, useState } from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./SearchBar/SearchBar";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import { fetchImagesWithSearchValue } from "../images_api";
import css from "./App.module.css";
import ImageModal from "./ImageModal/ImageModal";

const App = () => {
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState(null);
  const [loadMore, setLoadMore] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = (regular) => {
    setModalIsOpen(true);
    console.log(regular);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const onSearch = (event) => {
    setSearchValue(event);
  };

  const getMoreImages = () => {
    setLoadMore(loadMore + 1);
  };

  useEffect(() => {
    if (searchValue === null) return;

    async function fetchImage() {
      try {
        setLoading(true);
        const data = await fetchImagesWithSearchValue(searchValue, loadMore);
        setImages(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchImage();
  }, [searchValue, loadMore]);

  return (
    <>
      <SearchBar onSearch={onSearch} />
      {loading && <Loader />}
      {error !== null && <ErrorMessage />}
      {Array.isArray(images) && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {Array.isArray(images) && images.length > 0 && (
        <LoadMoreBtn getMoreImages={getMoreImages} />
      )}
      {Array.isArray(images) && images.length === 0 && (
        <p className={css.noImageTitle}>
          There are no images. Please change your value in the field.
        </p>
      )}
      {modalIsOpen && <ImageModal closeModal={closeModal} />}
    </>
  );
};

export default App;
