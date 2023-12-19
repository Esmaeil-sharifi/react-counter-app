import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count > 0 ? count - 1 : 0);
  };

  return (
    <div style={styles.counterContainer}>
      <h1 style={styles.counterHeading}>Count: {count}</h1>
      <div style={styles.buttonContainer}>
        <button style={styles.buttonIncrement} onClick={handleIncrement}>Increment</button>
        <button style={styles.buttonDecrement} onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
};

const styles = {
  counterContainer: {
    textAlign: 'center',
    margin: '50px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f4f4f4',
  },
  counterHeading: {
    fontSize: '24px',
    color: '#333',
  },
  buttonContainer: {
    marginTop: '20px',
  },
  buttonIncrement: {
    padding: '10px 20px',
    margin: '0 10px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    backgroundColor: '#4caf50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
  },
  buttonDecrement: {
    padding: '10px 20px',
    margin: '0 10px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    backgroundColor: '#d71b08',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
  },
};

export default Counter;
