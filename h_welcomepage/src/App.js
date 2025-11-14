import { useEffect } from 'react';

let check = false;

function App() {
  useEffect(() => {
    if (!check) {
      console.log('Welcome message displayed.');
      check = true;
    }
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Hello, user! Welcome to our site.</h1>
    </div>
  );
}

export default App;