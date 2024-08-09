import { useEffect, useState } from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./SearchBar/SearchBar";
import axios from "axios";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";

const App = () => {
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const ACCESS_KEY = "E1xxE1oKTwgg_W6JmdrRoPbDgn8gMbq3_X0T4N2uKC0";

  useEffect(() => {
    const fetchImage = async () => {
      setLoading(true);
      setError(true)
      const { data } = await axios.get(
        `https://api.unsplash.com/photos/?cient_id=${ACCESS_KEY}`
      );
      console.log(data);
      setImages(data);
      setLoading(false);
    };

    fetchImage();
  }, []);

  return (
    <>
      <SearchBar />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {Array.isArray(images) && <ImageGallery images={images} />}
      <LoadMoreBtn />
    </>
  );
};

export default App;
