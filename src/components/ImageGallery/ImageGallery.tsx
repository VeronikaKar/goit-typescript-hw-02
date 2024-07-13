import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";
import { MouseEvent } from "react";
import { Photos } from "../../App";

type Props = {
  photos: Photos;
  onOpenModal: (
    obj: { src: string; alt: string },
    e: MouseEvent<HTMLImageElement>
  ) => void;
};

export function ImageGallery({ photos, onOpenModal }: Props) {
  return (
    <ul className={s.list}>
      {photos.map((img) => (
        <li className={s.item} key={img.id}>
          <ImageCard
            src={img.urls.regular}
            alt={img.alt_description}
            onOpenModal={onOpenModal}
          />
        </li>
      ))}
    </ul>
  );
}
