import css from "./ImageCard.module.css";

const ImageCard = ({ image, openModal }) => {
  return (
    <>
      <div className={css.containerImg}>
        <a onClick={() => openModal(image.id)}>
          <img
            className={css.img}
            src={image.urls.small}
            alt={image.alt_description}
          />
        </a>
      </div>
    </>
  );
};

export default ImageCard;
