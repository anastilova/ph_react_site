// import { Image, Col, Container, Row } from "react-bootstrap";
import "./GalleryPage.css";
import React from "react";
import Images from "../components/images";

const GalleryPage = () => {
  return (
    <div className="gallery">
      <p>This page is GALLERY</p>
      <div className="center">
        <Images />
      </div>
    </div>
  );
};

export { GalleryPage };
