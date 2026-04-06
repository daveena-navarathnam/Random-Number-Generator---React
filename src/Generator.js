import React, { useState } from 'react';


function Generator() {
  const [randomNumber, setRandomNumber] = useState(null);

  function handleChange() {
    let random = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(random);
  }

  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: '60px',
        fontFamily: 'Arial',
      }}
    >
      <div
        style={{
          width: '380px',
          margin: 'auto',
          padding: '30px',
          borderRadius: '15px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
          backgroundColor: '#f9f9f9',
        }}
      >
        <h1>Random Number Generator</h1>

        {randomNumber === null ? (
          <h2>No number generated yet</h2>
        ) : (
          <h2 style={{ fontSize: '40px' }}>{randomNumber}</h2>
        )}

        <button
          onClick={handleChange}
          style={{
            padding: '12px 20px',
            marginTop: '15px',
            backgroundColor: 'blue',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Generate Random Number
        </button>
      </div>
    </div>
  );
}

export default Generator