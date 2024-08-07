import css from "./ImageGallery.module.css";

import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = () => {
  return (
    // <ul>
    //   {/* Набір елементів списку із зображеннями */}
    //   <li>
    //     <div>
    //       <img src="" alt="" />
    //     </div>
    //   </li>
    // </ul>
    <ul className={css.list}>
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />

      <ImageCard />
      <ImageCard />
      <ImageCard />
    </ul>
  );
};

export default ImageGallery;
