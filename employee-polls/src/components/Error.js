import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-container">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="home-link">
        Go to Home
      </Link>
    </div>
  );
};

export default Error;
