import { useEffect, useState } from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./SearchBar/SearchBar";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import { fetchImagesWithSearch } from "../images_api";

const App = () => {
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function fetchImage() {
      try {
        setLoading(true);
        const data = await fetchImagesWithSearch("office");
        setImages(data);
      }
      catch (error) {setError(true);}
      finally {
        setLoading(false);
      }
    }

    fetchImage();
  }, []);

  return (
    <>
      <SearchBar />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {Array.isArray(images) && <ImageGallery images={images} />}
      {Array.isArray(images) && <LoadMoreBtn />}
    </>
  );
};

export default App;
