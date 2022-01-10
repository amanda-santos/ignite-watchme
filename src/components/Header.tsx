import { GenreResponseProps } from "../@types/GenreResponseProps";

interface HeaderProps {
  title: GenreResponseProps["title"];
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <header>
      <span className="category">
        Categoria:<span> {title}</span>
      </span>
    </header>
  );
};
