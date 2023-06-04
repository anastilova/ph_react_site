import React, { useState } from "react";
import "./shop.css";
import { Button, Image } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { MDBInput } from "mdbreact";
// import { Form, Card as CustomCard } from "react-bootstrap/Form";

const ShopPage = () => {
  const [pstype, setPsType] = useState("");

  const [photographer, setPhotographer] = useState("");

  const [comment, setComment] = useState("");

  const createOrder = () => {
    console.log("createOrder", {
      pstype,
      photographer,
      comment,
      client_contacts: "",
    });

    //type, photographer, comment, client_contacts
    fetch("http://localhost:3002/savepsorder", {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pstype,
        photographer,
        comment,
        client_contacts: "",
      }),
    })
      .then((response) => response.json())
      .then((response) => console.log(JSON.stringify(response)));
  };

  return (
    <>
      <div className="containerForm">
        <h3>Оформление заказа</h3>

        <div className="formSend">
          <Form.Select
            aria-label="Default select example"
            onChange={(e) => {
              console.log("setPsType", e.target.value);
              setPsType(e.target.value);
            }}
          >
            <option>Тип услуги</option>
            <option value="1">Фотосессия в стиле LIFESTYLE</option>
            <option value="2">Фотосессия в стиле LOVESTORY</option>
            <option value="3">Фотосессия в стиле PORTRAIT</option>
          </Form.Select>

          <Form.Select
            aria-label="Default select example"
            onChange={(e) => {
              console.log("setPhotographer", e.target.value);
              setPhotographer(e.target.value);
            }}
          >
            <option>Исполнитель</option>
            <option value="1">Анастасия</option>
            <option value="2">Ассистент</option>
          </Form.Select>

          <MDBInput
            onChange={(e) => {
              console.log("setComment", e.target.value);
              setComment(e.target.value);
            }}
            type="textarea"
            label="Оставьте свой номер телефона и пожелания"
            rows="3"
          />

          <Button variant="primary" size="lg" onClick={createOrder}>
            Отправить
          </Button>

          <Image />
        </div>
      </div>
    </>
  );
};

export { ShopPage };
