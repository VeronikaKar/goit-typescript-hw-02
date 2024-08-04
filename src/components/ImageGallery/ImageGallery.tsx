import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";
import { Photos, Photo } from "../../types";

type Props = {
  photos: Photos;
  onOpenModal: (
    photo: Photo,
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => void;
};

export const ImageGallery: React.FC<Props> = ({ photos, onOpenModal }) => {
  return (
    <ul className={s.list}>
      {photos.map((img) => (
        <li className={s.item} key={img.id}>
          <ImageCard
            src={img.urls.regular}
            alt={img.alt_description}
            onOpenModal={(e) => onOpenModal(img, e)}
          />
        </li>
      ))}
    </ul>
  );
};
