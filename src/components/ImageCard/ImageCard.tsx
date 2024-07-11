import { MouseEvent } from "react";
import s from "./ImageCard.module.css";

type Props = {
  src: {
    small: string;
    regular: string;
  };
  alt: string;
  onOpenModal: (
    obj: { src: string; alt: string },
    e: MouseEvent<HTMLImageElement>
  ) => void;
};

export function ImageCard({ src, alt, onOpenModal }: Props) {
  const handleClick = (e: MouseEvent<HTMLImageElement>) => {
    onOpenModal({ src: src.regular, alt }, e);
  };

  return (
    <div className={s.wrapper}>
      <img
        className={s.imgCard}
        onClick={handleClick}
        src={src.small}
        alt={alt}
      />
    </div>
  );
}

export default ImageCard;
