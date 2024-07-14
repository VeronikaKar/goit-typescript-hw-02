import toast from "react-hot-toast";
import s from "./SearchBox.module.css";
import { FormEvent } from "react";

type Props = {
  onSubmit: (text: string) => void;
};

export function SearchBox({ onSubmit }: Props) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const value = formData.get("search") as string;

    if (!value.trim()) {
      toast.error("Field can't be empty!");
      return;
    }

    onSubmit(value);
    event.currentTarget.reset(); 
  };

  return (
    <header>
      <form
        className={`flex items-center gap-4 ${s.searchForm}`}
        onSubmit={handleSubmit}
      >
        <input
          className={s.input}
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={s.button__search} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}
