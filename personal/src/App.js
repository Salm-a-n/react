import React from 'react';

function ProfileCard() {
  const name = "Salman";
  const age = 20;
  const isStudent = true;
  const headingColor = "lightblue";
  const favoriteHobbies = ["Reading", "Hiking", "Coding"];

 
  const hobbyListForLoop = [];
  for (let i = 0; i < favoriteHobbies.length; i++) {
    hobbyListForLoop.push(<li key={`for-${i}`}>{favoriteHobbies[i]}</li>);
  }


  function showEnthusiasm() {
    document.getElementById("enthusiasmMsg").innerText =
      "Hello from React! I love my hobbies!";
    document.getElementById("mainHeading").style.backgroundColor = headingColor;
  }

  const cardStyle = {
    border: '2px solid #007bff',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '10px',
    width: '300px',
    textAlign: 'center',
    marginBottom: '20px'
  };

  return (
    <div className='container-fluid'>
          <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="text-center">
              <h1 id="mainHeading" className="mb-4">Hello Guys</h1>

              <div style={cardStyle} className="mb-4 mx-auto">
                <h3>Name: {name}</h3>
                <h4>Age: {age}</h4>
                <h5>Student: {isStudent.toString()}</h5>
              </div>

              <h4>Hobbies (Using for loop)</h4>
              <ul>{hobbyListForLoop}</ul>

              <h4>Hobbies (Using map)</h4>
              <ul>
                {favoriteHobbies.map((hobby, index) => (
                  <li key={`map-${index}`}>{hobby}</li>
                ))}
              </ul>

              <p id="enthusiasmMsg" className="mt-3">
                Click the button to see my enthusiasm!
              </p>

              <button className="btn btn-primary mt-2" onClick={showEnthusiasm}>
                Show Enthusiasm
              </button>
            </div>
          </div>
    </div>     
);
}

export default ProfileCard;