import toast from "react-hot-toast";
import s from "./SearchBox.module.css";
import { FormEvent } from "react"; // Import FormEvent for event type

type Props = {
  onSubmit: (text: string) => void;
};

export function SearchBox({ onSubmit }: Props) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const input = form.elements.search as HTMLInputElement;
    const value = input.value.trim();

    if (value === "") {
      toast.error("Field can't be empty!");
      form.reset();
      return;
    }

    onSubmit(value);
    form.reset();
  };

  return (
    <header>
      <form className="flex items-center gap-4 w-96" onSubmit={handleSubmit}>
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
