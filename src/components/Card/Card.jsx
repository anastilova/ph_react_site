import { Button, Card as CustomCard } from "react-bootstrap";
import "./Card.css";

export const Card = ({ name, description }) => {
  return (
    <div className="cards">
      <CustomCard>
        <p>{name}</p>
        <p>{description}</p>
        <Button>Заказать</Button>
      </CustomCard>
    </div>
  );
};
