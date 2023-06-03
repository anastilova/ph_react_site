import Form from "react-bootstrap/Form";

function SelectBasicExample() {
  return (
    <Form.Select aria-label="Default select example">
      <option>Тип услуги</option>
      <option value="1">Фотосессия в стиле LIFESTYLE</option>
      <option value="2">Фотосессия в стиле LOVESTORY</option>
      <option value="3">Фотосессия в стиле PORTRAIT</option>
    </Form.Select>
  );
}

export { SelectBasicExample };
