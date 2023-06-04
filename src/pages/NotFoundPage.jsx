import { Link } from "react-router-dom";
import React from "react";
import "./NotFoundPage.css";

export default function NotFoundPage() {
  return (
    <div className="box-main">
      <h1>
        <span>Page Not Found</span>
      </h1>
      <p>Sorry, the page you are looking for could not found.</p>
      <Link to="/">Go back to HomePage</Link>
    </div>
  );
}

export { NotFoundPage };
