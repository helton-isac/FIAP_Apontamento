import React from 'react';
import './App.css';
import Login from './login/login';

function App() {
  return (
    <div style={styles.screen}>
      <Login />
      <Credits />
    </div>
  );
}

const Credits = () => {
  return (
    <div style={styles.credit}>
      Ícones feitos por <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/br/"
        title="Flaticon">www.flaticon.com</a>
    </div>
  );
}

const styles = {
  screen: {
    flex: 1,
  },
  credit: {
    color: "#FFFFFF",
    fontSize: 10,
    textAlign: "center",
    marginTop: 100,
  }
}

export default App;