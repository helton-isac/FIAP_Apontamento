import React from 'react';
import './App.css';
import Login from './login/login';

function App() {
  return (
    <div style={styles.screen}>
      <Login />
    </div>
  );
}

const styles = {
  screen: {
    flex: 1,
  },
}

export default App;