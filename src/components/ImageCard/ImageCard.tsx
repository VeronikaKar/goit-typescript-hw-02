import React from "react";
import s from "./ImageCard.module.css";

type Props = {
  src: string;
  alt: string;
  onOpenModal: (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
};

const ImageCard: React.FC<Props> = ({ src, alt, onOpenModal }) => {
  return (
    <div className={s.card}>
      <img src={src} alt={alt} onClick={onOpenModal} />
    </div>
  );
};

export default ImageCard;
