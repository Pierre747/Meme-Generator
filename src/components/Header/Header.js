/* eslint-disable quotes */
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <img
        src="https://pngimg.com/uploads/trollface/trollface_PNG46.png"
        alt="logo"
        className="header__logo"
      />
      <h2 className="header__title">Meme Generator</h2>
      <span className="header__subtitle">
        Generate a meme and customize it !
      </span>
    </header>
  );
}
