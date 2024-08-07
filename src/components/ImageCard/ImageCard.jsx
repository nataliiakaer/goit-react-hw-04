import css from "./ImageCard.module.css";

const ImageCard = () => {
  return (
    <li className={css.item}>
      <div className={css.containerImg}>
        <a>
          <img src="" alt="" />
        </a>
      </div>
    </li>
  );
};

export default ImageCard;
