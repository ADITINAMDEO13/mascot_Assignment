import "./styles.css";
import one from "./img/one.jpg";
import two from "./img/two.jpg";
import three from "./img/three.jpg";
import four from "./img/four.jpg";
import five from "./img/five.jpg";
import { useState } from "react";

export default function App() {
  const [images, setImages] = [one, two, three, four, five];
  const [displayImg, setDisplayimg] = useState(one);
  console.log("disolay", displayImg);
  var count = 0;

  const prewImage = () => {
    if (count < 5) {
      count++;
    } else {
      count = 0;
    }
    console.log("imagge", images[count]);
    setDisplayimg(images[count]);
    console.log("ClickPrev");
  };

  const nextImage = () => {
    if (count < 0) {
      count--;
    } else {
      count = 4;
    }
    console.log("imagge", images[count]);
    setDisplayimg(images[count]);
    console.log("ClickNext");
  };

  return (
    <div className="App">
      <div id="slider">
        <div id="box">
          <img src={displayImg} alt="sliderimage" />
        </div>
        <button class="prew" onClick={prewImage}>
          -
        </button>
        <button class="next" onClick={nextImage}>
          +
        </button>
      </div>
      <>
        {images.map((item) => {
          return <img src={item} />;
        })}
      </>
    </div>
  );
}
