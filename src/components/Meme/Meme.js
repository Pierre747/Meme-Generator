/* eslint-disable quotes */

import { useState, useEffect, createRef } from "react";
import { useScreenshot, createFileName } from "use-react-screenshot";
import "./meme.css";

export default function Meme() {
  const ref = createRef(null);

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemes, setAllMemes] = useState([]);

  const [image, takeScreenShot] = useScreenshot({
    type: "image/jpeg",
    quality: 1.0,
  });

  const download = (image, { name = "img", extension = "jpg" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };

  const downloadScreenshot = () => takeScreenShot(ref.current).then(download);

  useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data.data.memes);
    }
    getMemes();
  }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const { url } = allMemes[randomNumber];
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form__input"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form__input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="form__button" onClick={getMemeImage} type="button">
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img
          ref={ref}
          src={meme.randomImage}
          className="meme__image"
          alt="meme"
        />
        <h2 className="meme__text top">{meme.topText}</h2>
        <h2 className="meme__text bottom">{meme.bottomText}</h2>
      </div>
      {/* <button type="button" onClick={downloadScreenshot}>
        Download screenshot
      </button> */}
    </main>
  );
}
