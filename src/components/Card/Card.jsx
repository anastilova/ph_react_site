import { Button, Card as CustomCard } from "react-bootstrap";
import "./Card.css";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.css";
// import React, { useState, useMemo } from "react";
import Street from "../../assets/street.jpg";

export const Card = ({ name, description }) => {
  // const ArrImg = useMemo(
  //   () => [
  //     "https://sun9-33.userapi.com/impg/TnIgJ-DBAjcobWUJ1ikEQIW-p_hh2xLWTFRYnA/4NcJre_xCY8.jpg?size=721x1080&quality=96&sign=1f4a8418d2ee534c351b79fa592516a6&type=album",
  //     "https://sun9-66.userapi.com/impg/mSL3c5pBNWp9gHsWG4cM0Loz4Bx0aTLs0g0NuQ/NJmm_oYYssU.jpg?size=721x1080&quality=96&sign=bc263006b8dac4eaf462a16e46a6628c&type=album",
  //     "https://sun9-31.userapi.com/impg/R61cL3ZPQJfDUILnDyLKKe0zX7yfvc2HNixxUg/qswosAAA0qg.jpg?size=863x1080&quality=96&sign=54fbbb4252b5a4594029c637abe1248d&type=album",
  //   ],
  //   []
  // );
  // const [currentImage, setCurrentImage] = useState(0);
  return (
    <div className="cards">
      <CustomCard>
        <Image
          src={Street}
          // src="https://sun9-33.userapi.com/impg/TnIgJ-DBAjcobWUJ1ikEQIW-p_hh2xLWTFRYnA/4NcJre_xCY8.jpg?size=721x1080&quality=96&sign=1f4a8418d2ee534c351b79fa592516a6&type=album"
          fluid
          responsive
          // style={{ backgroundImage: `url(${ArrImg[currentImage]})` }}
        />
        <p>{name} Имя карточки</p>
        <p>{description} Описание</p>
        <Button>Заказать</Button>
      </CustomCard>
    </div>
  );
};
