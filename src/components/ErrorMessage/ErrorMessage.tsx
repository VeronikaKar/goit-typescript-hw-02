import s from "./ErrorMessage.module.css";

type Props = {
  error: string;
};

export function ErrorMessage({ error }: Props) {
  return (
    <div className={s.error__container}>
      <p className={s.error__message}>{error}</p>
    </div>
  );
}
