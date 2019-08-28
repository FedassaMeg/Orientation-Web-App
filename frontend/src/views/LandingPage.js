import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
      <h1>First Call Orientation</h1>
      <Link to="/quiz">
        <button>Quiz</button>
      </Link>
      <Link to="/home">
        <button>Home</button>
      </Link>
      <Link to="/login">
        <button>login</button>
      </Link>
    </div>
  );
}
