import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";
import { MouseEvent } from "react";
import { Photos, Photo } from "../../App";

type Props = {
  photos: Photos;
  onOpenModal: (
    photo: Photo,
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
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
            onOpenModal={(e: React.MouseEvent<HTMLImageElement, MouseEvent>) =>
              onOpenModal(img, e)
            }
          />
        </li>
      ))}
    </ul>
  );
}
