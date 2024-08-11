import { useEffect, useState } from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./SearchBar/SearchBar";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import { fetchImagesWithSearchValue } from "../images_api";
import css from "./App.module.css";

const App = () => {
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState(null);

  useEffect(() => {
    if (searchValue === null) return;

    async function fetchImage() {
      try {
        setLoading(true);
        const data = await fetchImagesWithSearchValue(searchValue);
        setImages(data);
      }
      catch (error) {setError(true);}
      finally {
        setLoading(false);
      }
    }

    fetchImage();
  }, [searchValue]);

  const onSearch = (event) => {
    setSearchValue(event);
  };


  return (
    <>
      <SearchBar onSearch={onSearch}/>
      {loading && <Loader />}
      {error !== null && <ErrorMessage />}
      {Array.isArray(images) && <ImageGallery images={images} />}
      {Array.isArray(images) && images.length > 0 && <LoadMoreBtn />}
      {Array.isArray(images) && images.length === 0 && <p className={css.noImageTitle}>There are no images. Please change your value in the field.</p>}
    </>
  );
};

export default App;
