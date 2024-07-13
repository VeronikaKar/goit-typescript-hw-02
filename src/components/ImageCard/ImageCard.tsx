import s from "./ImageCard.module.css";
import { MouseEvent } from "react";

type Props = {
  src: string;
  alt: string;
  onOpenModal: (
    obj: { src: string; alt: string },
    e: MouseEvent<HTMLImageElement>
  ) => void;
};

export function ImageCard({ src, alt, onOpenModal }: Props) {
  return (
    <img
      className={s.image}
      src={src}
      alt={alt}
      onClick={(e) => onOpenModal({ src, alt }, e)}
    />
  );
}

export default ImageCard;
