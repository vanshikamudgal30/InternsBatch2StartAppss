import React from 'react';
import { Outlet } from 'react-router-dom';
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog">

      <Outlet/>

      <h1>Our Blog </h1>

      <p className="intro">
        Explore tutorials, tips, and real-world projects to improve your
        web development skills.
      </p>

      <div className="posts">

        <div className="card">
          <h3>Getting Started with React</h3>
          <p>
            Learn the basics of React, components, and how to build your first app.
          </p>
        </div>

        <div className="card">
          <h3>React Router Guide</h3>
          <p>
            Understand routing and navigation in React applications step-by-step.
          </p>
        </div>

        <div className="card">
          <h3>React Hooks Explained</h3>
          <p>
            Master useState and useEffect with simple examples.
          </p>
        </div>

        <div className="card">
          <h3>Build a Todo App</h3>
          <p>
            Create your first React project with practical implementation.
          </p>
        </div>

      </div>

      <p className="footer-text">
        This blog section is designed to help you practice React Router and
        improve your frontend development skills.
      </p>

    </div>
  );
};

export default Blog;