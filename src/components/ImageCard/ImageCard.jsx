import css from "./ImageCard.module.css";

const ImageCard = ({ image }) => {
  return (
    <div className={css.containerImg}>
      <a>
        <img src={image.urls.small} alt={image.alt_description} />
      </a>
    </div>
  );
};

export default ImageCard;
