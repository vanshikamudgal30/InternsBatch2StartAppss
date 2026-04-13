import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Home.css";

const Home = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/about');
  };

  return (
    <div className="home">

      <div className="hero">
        <h1>Build Modern Web Apps </h1>
        <p>
          Learn React, Routing, and UI Design with simple and practical examples.
          Start your journey to becoming a frontend developer today.
        </p>

        <button className="btn" onClick={handleClick}>
          Get Started
        </button>
      </div>

      <div className="features">

        <div className="card">
          <h3> Fast</h3>
          <p>Lightning fast performance using React and modern tools.</p>
        </div>

        <div className="card">
          <h3> Routing</h3>
          <p>Seamless navigation with React Router.</p>
        </div>

        <div className="card">
          <h3> UI Design</h3>
          <p>Clean and responsive layouts using CSS.</p>
        </div>

      </div>

      <div className="extra">
        <h2>Ready to Explore More?</h2>
        <button onClick={() => navigate('/blog')}>Visit Blog</button>
      </div>

    </div>
  )
}

export default Home