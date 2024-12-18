"use client";

import { useState } from 'react';
import Link from 'next/link';
import LogoImage from '@/components/Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div  id="left-nav">
      <nav className="left-nav">
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
        <LogoImage />

        <ul className={`menu ${isOpen ? 'open' : ''}`}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/users">User</Link></li>
          <li><Link href="/products">Products</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
