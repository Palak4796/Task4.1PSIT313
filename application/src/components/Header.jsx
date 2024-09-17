import React from 'react';
import './Header.css';


function Header() {
  return (
    <header className="header">
      <div className="logo">DEV@Deakin</div>
      <input type="text" placeholder="Search..." />
      <button>Post</button>
      <button>Login</button>
    </header>
  );
}

export default Header;
