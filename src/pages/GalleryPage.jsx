import { Image, Col, Container, Row } from "react-bootstrap";
import "./GalleryPage.css";

const GalleryPage = () => {
  return (
    <div className="gallery">
      <p>This page is GALLERY</p>
      <Container>
        <Row>
          <Col xs={5} md={4}>
            <Image src="../assets/street.jpg" rounded />
          </Col>
          <Col xs={6} md={4}>
            <Image src="holder.js/171x180" rounded />
          </Col>
          <Col xs={6} md={4}>
            <Image src="holder.js/171x180" rounded />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export { GalleryPage };
