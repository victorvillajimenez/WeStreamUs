import React from 'react';
import {Link} from 'react-router-dom';
import GoogleAuthButton from '../auth/GoogleAuthButton';

const Nav = () => {
  return (
    <nav
      style={{
        margin: '1rem 1rem 2rem 1rem',
        padding: '1rem',
        backgroundColor: 'aliceblue',
        borderRadius: '.5rem',
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <Link
        style={{
          textDecoration: 'none',
          color: 'blue',
          fontSize: '24px'
        }}
        to='/'
      >
        WeStreamUs
      </Link>
      <GoogleAuthButton />
    </nav>
  );
};

export default Nav;
