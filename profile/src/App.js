import { useState, useEffect } from 'react';

function App(){
  const [user, setUser] = useState('guest');
  useEffect( () =>{
    if (user !=='guest')
    console.log(`user changed to ${user}`);
  }, [user]);
  
  const handleClick = () => {
    setUser('alice');
  };
   return (
  <div>
  <h2>Welcome '{user}'</h2>
  <button onClick={handleClick} > Login as Alice </button>
  </div>
);
}
export default App;
