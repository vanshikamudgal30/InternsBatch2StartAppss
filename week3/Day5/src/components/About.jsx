import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./About.css";

const About = () => {

  const navigate = useNavigate();

  function handleClick() {
    navigate('/blog');
  }

  return (
    <div className="about">

      <h1>About Our Platform </h1>

      <p className="intro">
        We help students and developers learn modern web development using
        React, JavaScript, and real-world projects in a simple and practical way.
      </p>

      <div className="about-container">

        <div className="card">
          <h3>Who We Are</h3>
          <p>
            A team of passionate developers building modern and responsive web apps.
          </p>
        </div>

        <div className="card">
          <h3> Our Mission</h3>
          <p>
            To make learning web development easy, practical, and fun.
          </p>
        </div>

        <div className="card">
          <h3> What We Do</h3>
          <p>
            We create tutorials, blogs, and projects to improve your skills.
          </p>
        </div>

      </div>

    </div>
  )
}

export default About