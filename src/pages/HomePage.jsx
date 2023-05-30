import "../index.css";
import React, { useState, useMemo, useEffect } from "react";

const HomePage = () => {
  const images = useMemo(
    () => [
      "https://sun9-62.userapi.com/impg/nE1Um3jFG_z_X50QB8hZNQZXh394WfMfzzUttQ/VCZp8CL98a4.jpg?size=1920x1282&quality=96&sign=13fa72aa4ec6cfb6f7f2cbfaeadb08e9&type=album",
      "https://sun9-31.userapi.com/impg/SQs53nx5PSQlr28HUP2D-GSBrt90iCfARzD8Fw/_f6nHcrfMP0.jpg?size=2560x1709&quality=95&sign=5333d855463aafba603cd1ff4b8a6964&type=album",
      "https://sun9-1.userapi.com/impg/_YifqFkQKrIG3_LUrAPi2VOmLv7K0Dy2vs3dCA/CqPJjK_46xg.jpg?size=2560x1709&quality=95&sign=aabf375d1be8554798ad27e960620859&type=album",
    ],
    []
  );
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    //alert(123);
    setInterval(() => {
      setCurrentImage((prevImg) => {
        if (prevImg < images.length - 1) {
          return prevImg + 1;
        } else {
          return 0;
        }
      });
    }, 5000);
  }, [images]);

  return (
    <div>
      <div
        className="page"
        id="change"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      ></div>
      <div className="page page1"></div>
    </div>
  );
};

export { HomePage };
