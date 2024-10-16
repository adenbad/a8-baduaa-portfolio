// src/pages/HomePage.js
import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaLock } from 'react-icons/fa'; // Importing some icons for embellishment

const HomePage = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <article>
        <p>
          Welcome to my portfolio website. My career goal is to become a cybersecurity engineer as I am very interested
          in the conceptual and mechanical processes involved within this field. 
        </p>
        <p>Major Technologies Used in This Website:</p>
        <ul>
          <li><FaReact /> React - A JavaScript library for building user interfaces</li>
          <li><FaNodeJs /> Node.js - A JavaScript runtime built on Chrome's V8 JavaScript engine</li>
          <li><FaDatabase /> MongoDB - A document-oriented NoSQL database used for high volume data storage</li>
          <li><FaLock /> Cybersecurity Principles - Implementing security best practices in web development</li>
          <li>Express.js - A minimal and flexible Node.js web application framework</li>
          <li>JavaScript (ES6+) - The programming language of the web</li>
          <li>HTML5 & CSS3 - Standard technologies for structuring and styling web pages</li>
        </ul>
      </article>
    </div>
  );
};

export default HomePage;
