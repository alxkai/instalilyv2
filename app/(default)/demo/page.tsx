"use client"
import React, { useState } from 'react';

const metadata = {
  title: 'INSTALILY.AI - Demo Page',
  description: 'At Instalily, we believe in empowering enterprises to create a competitive edge through AI. Our app enables you to effortlessly address any question and harness the full potential of artificial intelligence to propel your business forward.',
}

import HeroDemo from '@/components/hero-demo'
import ContentDemo from '@/components/content-demo'

export default function Demo() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const correctPassword = 'demo'; // Replace with your actual password

  const handlePasswordSubmit = () => {
    if (password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password. Please try again.');
    }
  };

  return (
    <>
      <HeroDemo />
      {isAuthenticated ? (
        <ContentDemo />
      ) : (
        <div className="password-prompt">
          <div className="password-form">
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handlePasswordSubmit}>Submit</button>
          </div>
          <style jsx>{`
            .password-prompt {
              display: flex;
              justify-content: center; /* Horizontally center */
              align-items: center; /* Vertically center */
              min-height: 40vh;
            }

            .password-form {
              background-color: #f2f2f2;
              padding: 30px;
              border-radius: 8px;
              text-align: center;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }

            h2 {
              margin-bottom: 10px;
            }

            input {
              padding: 3px;
              margin: 5px;
              border-radius: 4px;
              font-size: 14px;
            }

            button {
              background-color: #181818;
              color: white;
              border: none;
              border-radius: 4px;
              padding: 5px 20px;
              cursor: pointer;
              font-weight: 500;
              font-size: 14px;
              margin-left: 10px;
            }

            button:hover {
              background-color: #A2F9DA;
              color: black;
            }
          `}</style>
        </div>
      )}
    </>
  );
}
