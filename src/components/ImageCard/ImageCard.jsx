import css from "./ImageCard.module.css";

export const ImageCard = ({ imageUrl, alt }) => {
  return (
    <div>
      <img src={imageUrl} alt={alt} />
    </div>
  );
};
