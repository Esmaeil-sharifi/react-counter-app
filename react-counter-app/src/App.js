import React from 'react';
import Counter from './Counter'; 

const App = () => {
  return (
    <div style={styles.appContainer}>
      <h2 style={styles.appHeading}>React Counter App</h2>
      <Counter />
    </div>
  );
};

const styles = {
  appContainer: {
    textAlign: 'center',
    marginTop: '50px',
  },
  appHeading: {
    fontSize: '28px',
    color: '#333',
  },
};

export default App;
