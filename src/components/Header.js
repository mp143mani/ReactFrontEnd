import React from 'react';

const Header = () => {
  return (
    <header>
      {/* Add your header content and navigation here */}
      <nav>
        <h1>CRM App</h1>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/register">Register</a>
          </li>
          {/* Add more navigation links */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
