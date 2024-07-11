import s from "./LoadMore.module.css";
import { MouseEvent } from "react";

type Props = {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
};

export function LoadMoreBtn({ onClick }: Props) {
  return (
    <button onClick={onClick} className={s.button__load}>
      Load more
    </button>
  );
}
