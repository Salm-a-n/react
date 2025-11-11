import './App.css';
import React from 'react';
function ProfileCard() {
  const name = "Salman";
  const age = "20";
  // const isStudent = true;
  const headingColor = "lightblue";
  const hobees = ["Reading", "Hiking", "Coding"];
  const hoblist = [ ];
  for( let i=0; i < hobees.length; i++) {
       hoblist.push(<li key ={i}> {hobees[i]} </li> );
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
    textAlign: 'center'
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <h1 id='mainHeading'>hello Guys </h1>
      <div style={cardStyle} id='enthusiasmMsg'>
        <h3>{name}</h3>
        <h3>{age}</h3>
      </div>

      <div>
            <h1>hoby</h1>
            <ul>{hoblist}</ul>
      </div>


       <div>
           {hobees.map((item)=>{return <p>{item}</p>})}  
      </div>

      <button className="btn btn-primary mt-3" onClick={showEnthusiasm}>
        Show Enthusiasm
      </button>

    </div>
  );
};
export default ProfileCard;
