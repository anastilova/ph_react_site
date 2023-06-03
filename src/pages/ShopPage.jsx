import React from "react";
import "./shop.css";
import { TextareaPage } from "../components/TextareaPage";
import { SelectBasicExample } from "../components/SelectBasicExample";
import { SelectBasicExample1 } from "../components/workPerformer";
// import { Form, Card as CustomCard } from "react-bootstrap/Form";

const ShopPage = () => {
  return (
    <>
      <div className="containerForm">
        <h3>Оформление заказа</h3>
        <div className="formSend">
          <SelectBasicExample />
          <SelectBasicExample1 />
          <TextareaPage />
        </div>
      </div>
    </>
  );
};

export { ShopPage };
