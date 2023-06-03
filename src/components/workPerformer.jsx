import React from "react";
import Form from "react-bootstrap/Form";

function SelectBasicExample1() {
  return (
    <Form.Select aria-label="Default select example">
      <option>Исполнитель</option>
      <option value="1">Анастасия</option>
      <option value="2">Ассистент</option>
    </Form.Select>
  );
}

export { SelectBasicExample1 };
